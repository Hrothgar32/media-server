import {
    SEARCHING_MOVIES,
    MOVIES_LOADED,
    MOVIE_SEARCH_ERROR,
    FETCHING_MOVIE_INFO,
    MOVIE_INFO_NOT_FOUND,
    MOVIE_INFO_LOADED,
    MOVIE_INFO_CLOSE,
    GET_SEASON_INFO,
    GET_RECOMMENDATIONS
} from './types';
import axios from 'axios';

export const search = (movie) => dispatch => {
    dispatch({type: SEARCHING_MOVIES});
    const URL = "https://www.omdbapi.com/?apikey=d209dab&plot=full&s=" + movie;
    fetch(URL)
    .then(value => {return value.json()})
    .then((res)=>{ 
        if(res["Response"] === "True"){
            dispatch({
                type: MOVIES_LOADED,
                payload: res.Search,                
            })
        }
        else{
            dispatch({
                type: MOVIE_SEARCH_ERROR
            })
        }
    })
}

export const fetchMovieInfo = (title, imdbID) => dispatch =>{
    dispatch({ type: FETCHING_MOVIE_INFO });
    const URL = "https://tastedive.com/api/similar?q=" + title + "&type=movies&info=1&limit=1&k=329105-hrothgar-MA57KNVO";
    const data = {URL : URL};
    fetch('https://corsproxy.almoszediu.com/api/cors', {
        method: "POST",
        credentials: "omit",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(data)
    })
     .then(value => value.json())
     .then((res) => {
         if(res.Similar.Info[0].yUrl){
             var movieInfo = {
                 ytURL : res.Similar.Info[0].yUrl,
             }
             fetch("http://www.omdbapi.com/?apikey=d209dab&plot=full&i=" + imdbID)
              .then(value => value.json())
              .then((res) =>{
                  movieInfo.Title = res.Title;
                  movieInfo.Runtime = res.Runtime;
                  movieInfo.Plot = res.Plot;
                  movieInfo.Actors = res.Actors;
                  movieInfo.Awards = res.Awards;
                  movieInfo.imdbID = res.imdbID;
                  movieInfo.Type = res.Type;
                  if(movieInfo.Type === "series")
                        movieInfo.totalSeasons = res.totalSeasons;
                  dispatch({
                      type: MOVIE_INFO_LOADED,
                      payload: {
                          movieInfo,
                          imdbID
                      },
                  })
              })
         }
         else{
             dispatch({
                 type: MOVIE_INFO_NOT_FOUND
             })
         }
     })
}

export const closeMovieInfo = () => dispatch => {
    dispatch({
        type: MOVIE_INFO_CLOSE
    })
}

export const getRecommendations = (title, typeDef) => dispatch => {
    var type = "movies" ? (typeDef === "movie") : "shows";
    const URL = "https://tastedive.com/api/similar?q=" + title + "&type=" + type +  "&k=329105-hrothgar-MA57KNVO";
    const data = {URL: URL};
    const INFO_URL = "https://www.omdbapi.com/?apikey=d209dab&plot=short&t=";
    var recommendationList = []
    fetch('http://144.24.174.202:8080/api/cors',{
        method: 'POST',
        credentials: 'include',
        headers: {
            "content-type" : "application/json",
        },
        body: JSON.stringify(data),
    })
     .then(value => value.json())
     .then((res) => {
         var recs = res.Similar.Results;
         let promises = [];
         for(let i = 0; i < recs.length; i++){
            promises.push(axios.get(INFO_URL + recs[i].Name));
         }
         axios.all(promises)
            .then(axios.spread((...args) => {
                for(let i = 0; i < args.length; i++){
                    recommendationList.push(args[i].data);
                }
            }))
             .then(() =>{
                 dispatch({
                     type: GET_RECOMMENDATIONS,
                     payload: recommendationList
                 })
             })
         
     })

}

export const getEpisodes = (imdbID,season) => dispatch => {
    const URL = "https://www.omdbapi.com/?apikey=d209dab&plot=short&i=";
    var episodeList = [];
    fetch(URL  + imdbID + "&season=" + season)
     .then(value => value.json())
     .then((res) => {
        var episodes = res.Episodes;
        let promises = [];
        for(let i = 0; i < episodes.length; i++){
            promises.push(axios.get(URL + episodes[i].imdbID));
        } 
        axios.all(promises)
            .then(axios.spread((...args) => {
                for(let i = 0; i < args.length; i++){
                    episodeList.push(args[i].data);
                }
            }))
              .then(() => {
                  dispatch({
                      type: GET_SEASON_INFO,
                      payload: episodeList,
                  })
              })
     })
}
