import {
    GETTING_TORRENT_FILE, ADDING_TORRENT_TO_QUEUE, INITIATE_BUFFER, BUFFER_READY
} from './types';
import { URL } from '../URL';

export const getTorrentFile = (imdbID, type, title, season=1, episode=1) => dispatch => {
    dispatch({
        type : GETTING_TORRENT_FILE,
    })
    var data = null;
    if(type === "seriesT"){
        data = {
            imdbID,
            type,
            title,
            season,
            episode
        };
    }
    else{
        data = {
            imdbID,
            type,
            title
        };
    }
    fetch(URL + ':8080/api/torrent', {
        method: "POST",
        credentials: "include",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(data)
    })
     .then(value => value.json())
     .then((res) => {
         if(res.message){
             if(type === "seriesT"){
                dispatch({
                    type: ADDING_TORRENT_TO_QUEUE,
                    payload : {
                        imdbID,
                        title,
                        type,
                        season,
                        episode
                    }
                })    
             }
             else{
                dispatch({
                    type: ADDING_TORRENT_TO_QUEUE,
                    payload : {
                        imdbID,
                        title,
                        type
                    }
                })
             }
         }
     })
}

const insertMovieInDatabase = (imdbID, fileName) => {
    fetch(URL + ':8080/api/insertmovie', {
        method: "POST",
        credentials: "include",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            imdbID,
            fileName
        })
    });
}

const insertMovieUserRelation = (imdbID, userID, timePos) => {
    fetch(URL + ':8080/api/movie_user_relation', {
        method: "POST",
        credentials: "include",
        headers: {
            "content-type" : "application/json",
        },
        body: JSON.stringify({
            imdbID,
            userID,
            timePos            
        }),
    });
}

export const initiateBuffer = (data,imdbID,userID) => dispatch => {
    dispatch({
        type: INITIATE_BUFFER,
    })
    fetch(URL + ':8080/api/download', {
        method: "POST",
        credentials: "include",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(data)
    })
     .then(value => value.json())
     .then((res) => {
         if(res.file_name){
            insertMovieInDatabase(imdbID, res.file_name);
            insertMovieUserRelation(imdbID, userID, '0:00:00');
            setTimeout(() => {
                dispatch({
                    type: BUFFER_READY,
                    payload: {fileName : res.file_name}
                })
             }, 15000)
         }
     })
}