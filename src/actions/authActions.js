import { 
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED, 
    LOGOUT_SUCCESS} from './types';
import { URL } from '../URL';

export const loadUser = () => dispatch =>{
    dispatch({ type: USER_LOADING });
    fetch(URL + ":8080/api", {
        credentials: 'include'
    })
     .then(res => res.json())
     .then((data) => {
         if(!data.msg){
             dispatch({ type: USER_LOADED });
         }
         else{
             dispatch({ type: AUTH_ERROR });
         }
     })
}

export const login = (authData) => dispatch =>{
    fetch(URL + ":8080/api/login",{
      method: "POST",
      credentials: 'include',
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(authData),
    })
     .then(res => res.json())
     .then((data) => {
        if(data.login){
            dispatch({
                type: LOGIN_SUCCESS,
                payload : data.user_id,
            })
        }
        else if(!data.login){
            dispatch({
                type: LOGIN_FAILED,
            })
        }
        else{
            dispatch({
                type: LOGIN_FAILED,
            })
        }
     })
}

export const logout = () => dispatch =>{
    fetch(URL + ":8080/api/logout",{
        credentials: 'include',
    })
     .then(res => res.json())
     .then((data) =>{
         if(data.logout){
             dispatch({
                 type: LOGOUT_SUCCESS,
             })
         }
     })

}
