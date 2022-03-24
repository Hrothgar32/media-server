import { combineReducers } from 'redux';
import authReducer from './authReducer';
import movies from './movies';
import watch from './watch';
import trailerbox from './trailerbox'

export default combineReducers({
    authData: authReducer,
    movies,
    watch,
    trailerbox
})