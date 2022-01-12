// import { LOGIN } from "./loginTypes";
import axios from 'axios'
import {
    FETCH_LOGIN_REQUEST ,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
    

    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE,

    LOGIN_WITH_GOOGLE_REQUEST,
    LOGIN_WITH_GOOGLE_FAILURE,
    LOGIN_WITH_GOOGLE_SUCCESS,

    
    FETCH_LOGOUT_SUCCESS,
    FETCH_LOGOUT_FAILURE,
    FETCH_LOGOUT_REQUEST
} from './loginTypes'

export const fetchLogin = (data) => {
    return (dispatch) => {
        // console.log(`fetchLogin : ${data}`)
        dispatch(fetchLoginRequest())
        console.log("process.env.REACT_APP_URL : ",process.env.REACT_APP_URL)
        console.log(data)
        // axios.post(`${process.env.REACT_APP_URL}/v1/site-auth/signin` , data ,{withCredentials: true,credentials:'include',headers: {"Access-Control-Allow-Origin": true}} )
        
        axios({
            url : `${process.env.REACT_APP_URL}/v1/site-auth/signin`,
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            withCredentials: true,
            data
        })
        .then(res => {
            console.log('signin response is running')
            console.log(res)
            const user = res.data.user
            console.log(user)
            dispatch(fetchLoginSuccess(user))
        })
        .catch(err=> {
            dispatch(fetchLoginFailure(err.message))
        })
    }
}


export const fetchLoginRequest =()=>{
    return {
        type : FETCH_LOGIN_REQUEST
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




export const fetchRegister = (data,callback)=>{
    return (dispatch) => {
        console.log(`fetchLogin : ${data}`)
        console.log(data)
        dispatch(fetchRegisterRequest())
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_URL}/v1/site-auth/register`,
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
            URL : `${process.env.REACT_APP_URL}/v1/site-auth/google` ,
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



export const fetchLogout = () => {
    return(dispatch)=>{
        dispatch(fetchLogoutRequest())
        axios.get(`${process.env.REACT_APP_URL}/v1/site-auth/logout`)
        .then(res=>{
            const message = res.data.message
            console.log(`Logout data : ${message}`)
            dispatch(fetchLogoutSuccess(message))
        })
        .catch(err => dispatch(fetchLogoutFailure(err)) )
    }
}
export const fetchLogoutRequest = ()=> {
    return {
        type : FETCH_LOGOUT_REQUEST 
    }
}

export const fetchLogoutSuccess = (message)=>{
    console.log(`fetchLogoutSuccess : ${message}`)
    return {
        type : FETCH_LOGOUT_SUCCESS ,
        payload : {user : null , isLogin : false, msg : message}
    }
}

export const fetchLogoutFailure = (err) => {
    return {
        type : FETCH_LOGOUT_FAILURE ,
        payload : err
    }
}
