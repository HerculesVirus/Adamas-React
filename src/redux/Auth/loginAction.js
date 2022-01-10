// import { LOGIN } from "./loginTypes";
import axios from 'axios'
import {
    FETCH_LOGIN_REQUEST ,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
    FETCH_LOGOUT_REQUEST,

    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE,

    LOGIN_WITH_GOOGLE_REQUEST,
    LOGIN_WITH_GOOGLE_FAILURE,
    LOGIN_WITH_GOOGLE_SUCCESS
} from './loginTypes'

export const fetchLogin = (data) => {
    return (dispatch) => {
        // console.log(`fetchLogin : ${data}`)
        dispatch(fetchLoginRequest())
        console.log("process.env.REACT_APP_URL : ",process.env.REACT_APP_URL)
        axios.post(`http://localhost:8000/v1/site-auth/signin` , data)
        .then(res => {
            const user = res.data
            if(user.token ){
                dispatch(fetchLoginSuccess(user))
            }
            else{
                dispatch(fetchLoginFailure(user))
            }
        })
        .catch(err=> {
            dispatch(fetchLoginFailure(err.message))
        })
    }
}

export const fetchRegister = (data,callback)=>{
    return (dispatch) => {
        console.log(`fetchLogin : ${data}`)
        console.log(data)
        dispatch(fetchRegisterRequest())
        axios({
            method: 'post',
            url: 'http://localhost:8000/v1/site-auth/register',
            data,
            withCredentials: true
        }) 
        .then(res => {
            const user = res.data
            if(user.token ){
                dispatch(fetchRegisterSuccess(user))
                callback(user)
            }
            else{
                dispatch(fetchRegisterFailure(user))
            }    
        })
        .catch(err=> { dispatch(fetchLoginFailure(err.message)) })
    }
}

export const fetchRegisterRequest = ()=>{
    return{
        type : FETCH_REGISTER_REQUEST
    }
}

export const fetchRegisterSuccess = (data)=>{
    return{
        type : FETCH_REGISTER_SUCCESS ,
        payload: data
    }
}

export const fetchRegisterFailure =(err) =>{
    return{
        type: FETCH_REGISTER_FAILURE ,
        payload : err
    }
}



export const LoginWithGoogle= ()=>{
    return(dispatch)=>{
        dispatch(LoginWithGoogleRequest())
        axios({
            method : 'get' , 
            URL : `http://localhost:8000/v1/site-auth/google` ,
            withCredentials: true,
        })
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
