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
} from '../actions/types';

const initialState = {
    isSearching : false,
    isRecload : false,
    movies: [],
    movieInfo: null,
    movieInfoimdbID: null,
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCHING_MOVIES:
            return{
                ...state,
                isRecload : false,
                isSearching : true,
            }
        case MOVIE_SEARCH_ERROR:
            return{
                ...state,
                isRecload : false,
                isSearching : false,
                movies : []
            }
        case MOVIES_LOADED:
            return{
                ...state,
                isSearching: false,
                isRecload : false,
                movies: action.payload
            }
        case FETCHING_MOVIE_INFO:
            return{
                ...state,
                isSearching: true,
                isRecload : false,
            }
        case MOVIE_INFO_LOADED:
            return {
                ...state,
                isSearching : false,
                isRecload : false,
                movieInfo: action.payload.movieInfo,
                movieInfoimdbID: action.payload.imdbID
            } 
        case MOVIE_INFO_NOT_FOUND:
            return{
                ...state,
                isRecload : false,
                movieInfo: null,
                movieInfoimdbID : null
            }
        case MOVIE_INFO_CLOSE:
            return{
                ...state,
                isRecload : false,
                movieInfo: null,
                movieInfoimdbID : null
            }
        case GET_SEASON_INFO:
          let movieInfo = {
                ...state.movieInfo,
                isRecload : false,
                Type: "seriesT",
                episodeList : action.payload,
            }
            return{
                ...state,
                movieInfo
            }
        case GET_RECOMMENDATIONS:
            let recMovieInfo = {
                ...state.movieInfo,
                isRecload : true,
                recommendations: action.payload,
            }
         return{
             ...state,
             movieInfo: recMovieInfo,
         }
        default:
            return state;
    }

}