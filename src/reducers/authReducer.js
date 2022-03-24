import {
USER_LOADED,
USER_LOADING,
AUTH_ERROR, 
LOGIN_SUCCESS,
LOGIN_FAILED,
LOGOUT_SUCCESS} from '../actions/types';

const initialState = {
    authenticated: null,
    isLoading: false,
    user_id : null,
}

export default function(state = initialState, action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return{
                ...state,
                authenticated: true,
                isLoading: false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                user_id : action.payload,
                authenticated: true,
                isLoading: false
            }
        case AUTH_ERROR:
            return{
                ...state,
                authenticated: false,
                isLoading: false
            }
        case LOGIN_FAILED:
            return{
                ...state,
                authenticated: false,
                isLoading: false
            }
        case LOGOUT_SUCCESS:
            return{
                ...state,
                user_id : null,
                authenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}