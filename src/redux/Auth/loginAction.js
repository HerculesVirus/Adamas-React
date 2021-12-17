// import { LOGIN } from "./loginTypes";
import axios from 'axios'
import {
    FETCH_LOGIN_REQUEST ,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
    FETCH_LOGOUT_REQUEST
} from './loginTypes'

export const fetchLogin = (data) => {
    return (dispatch) => {
        // console.log(`fetchLogin : ${data}`)
        dispatch(fetchLoginRequest())
        axios.post('http://localhost:8000/api/publicsite/signin' , data)
        .then(res => {
            const user = res.data
            if(user.token ){
                //console.log(`user : ${Object.values(user)}`)
                dispatch(fetchLoginSuccess(user))
            }
            else{
                //console.log(`error : ${Object.values(user)}`)
                dispatch(fetchLoginFailure(user))
            }
            
        })
        .catch(err=> {
            dispatch(fetchLoginFailure(err.message))
        })
    }
}
export const fetchLoginSuccess = (user)=> {
    return { 
        type : FETCH_LOGIN_SUCCESS ,
        payload : user
    }
}
export const fetchLoginFailure = (error)=> {
    return { 
        type : FETCH_LOGIN_FAILURE,
        payload : error
    }
}
export const fetchLoginRequest =()=>{
    return {
        type : FETCH_LOGIN_REQUEST
    }
}
export const fetchLogoutRequest = ()=> {
    return {
        type : FETCH_LOGOUT_REQUEST ,
        payload : null

    }
}
