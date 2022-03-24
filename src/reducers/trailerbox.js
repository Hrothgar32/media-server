import {
    TRAILERBOX_OVERVIEW_MODE,
    TRAILERBOX_EPISODES_MODE,
    TRAILERBOX_MORE_MODE,
    TRAILERBOX_DETAILS_MODE
} from "../actions/types";

const initialState = {
    display : 0,
}

export default function(state = initialState, action){
    switch(action.type){
        case TRAILERBOX_OVERVIEW_MODE:
            return{
                ...state,
                isRecload : false,
                display : 0,
            }
        case TRAILERBOX_EPISODES_MODE:
            return{
                ...state,
                isRecload : false,
                display : 1,
            }
        case TRAILERBOX_MORE_MODE:
            return{
                ...state,
                display: 2,
            }
        case TRAILERBOX_DETAILS_MODE:
            return{
                ...state,
                display: 3,
            }
        default:
            return state;
    }
}