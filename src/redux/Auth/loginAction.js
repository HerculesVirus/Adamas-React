// import { LOGIN } from "./loginTypes";
import axios from 'axios'
import {
    FETCH_LOGIN_REQUEST ,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
    FETCH_LOGOUT_REQUEST,
    LOGIN_WITH_GOOGLE_REQUEST,
    LOGIN_WITH_GOOGLE_FAILURE,
    LOGIN_WITH_GOOGLE_SUCCESS
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

export const LoginWithGoogle= ()=>{
    return(dispatch)=>{
        dispatch(LoginWithGoogleRequest())
        axios.get(`http://localhost:8000/api/publicsite/signin/google`)
        .then(res => {
            const  newUser= res.data
            dispatch(LoginWithGoogleSuccess(newUser))
        })
        .catch(err => dispatch(LoginWithGoogleFailure(err)))

    }
}
export const LoginWithGoogleRequest =()=>{
    return{
        type : LOGIN_WITH_GOOGLE_REQUEST
    }
}
export const LoginWithGoogleSuccess = (data) => {
    return{
        type : LOGIN_WITH_GOOGLE_SUCCESS ,
        payload : data
    }
}
export const LoginWithGoogleFailure = (err)=>{
    return {
        type : LOGIN_WITH_GOOGLE_FAILURE ,
        payload : err
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
