import { LOGIN } from "./loginTypes";
import axios from 'axios'
import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE
} from './loginTypes'

const isLoginAction = (bool) => {
    return {
        type : LOGIN ,
        payload : bool
    }
}
export const fetchLogin = (data) => {
    return (dispatch) => {
        console.log(`fetchLogin : ${data}`)
        axios.post('http://localhost:8000/api/publicsite/signin' , data)
        .then(res => {
            const user = res.data
            dispatch(fetchLoginSuccess(user))
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
export default isLoginAction