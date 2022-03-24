import {
    TRAILERBOX_OVERVIEW_MODE,
    TRAILERBOX_EPISODES_MODE,
    TRAILERBOX_MORE_MODE,
    TRAILERBOX_DETAILS_MODE
} from "./types";

export const toggleMenu = (display) => dispatch => {
    switch(display){
        case 0:
            dispatch({
                type: TRAILERBOX_OVERVIEW_MODE,
            })
            return;
        case 1:
            dispatch({
                type: TRAILERBOX_EPISODES_MODE,
            })
            return;
        case 2:
            dispatch({
                type: TRAILERBOX_MORE_MODE,
            })
            return;
        case 3:
            dispatch({
                type: TRAILERBOX_DETAILS_MODE,
            })
            return;
        default:
            return;
    }
}