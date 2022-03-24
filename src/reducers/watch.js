import {
    GETTING_TORRENT_FILE,
    ADDING_TORRENT_TO_QUEUE,
    INITIATE_BUFFER,
    BUFFER_READY
} from '../actions/types';

const initialState = {
    transition_state : null,
    data : "gibberish",
    fileName : "gibberish",
}

export default function(state = initialState, action){
    switch(action.type){
        case GETTING_TORRENT_FILE:
            return{
                ...state,
                transition_state : "Getting the torrent file"
            }
        case ADDING_TORRENT_TO_QUEUE:
            return{
                ...state,
                transition_state : "Adding torrent file to queue",
                data : action.payload
            }
        case INITIATE_BUFFER:
            return{
                ...state,
                transition_state: "Initiating buffer"
            }
        case BUFFER_READY:
            return{
                ...state,
                fileName : action.payload.fileName
            }
        default:
            return state;
    }
}