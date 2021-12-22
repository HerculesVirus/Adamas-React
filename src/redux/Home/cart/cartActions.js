import axios from 'axios'
import { useSelector } from 'react-redux'
import {
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAILURE , 

    POST_CART_REQUEST ,
    POST_CART_SUCCESS , 
    POST_CART_FAILURE 
} from './cartTypes'

export const fetchCart = (id)=>{
    return(dispatch)=>{
        if(id){
            //check for Cart already exist
            //POST
            const user = useSelector(state => state.auth.user.user._id)
            console.log(user)
            axios.post(`http://localhost:8000/api/publicsite/Cart` , user)
            .then(res =>{
                const massage = res.message
                dispatch(fetchPostCartSuccess(massage))
            } )
            .catch(err => dispatch(fetchPostCartFailure(err)))
        }
        else{
            //GET is Hit here
            axios.get('http://localhost:8000/api/publicsite/Cart')
            .then(res => {
                const cart =res.data
                dispatch(fetchGetCartSuccess(cart))
            })
            .catch(err => dispatch(fetchGetCartFailure(err)) )
        }
    }
}

export const fetchGetCartRequest = ()=> {
    return {
        type : GET_CART_REQUEST
    }
}

export const fetchGetCartSuccess = (data)=> {
    return {
        type : GET_CART_SUCCESS,
        payload : data
    }
}
export const fetchGetCartFailure = (err)=> {
    return {
        type : GET_CART_FAILURE ,
        payload : err
    }
}
//POST-----------------------------
export const fetchPostCartRequest = ()=> {
    return {
        type : POST_CART_REQUEST
    }
}

export const fetchPostCartSuccess = (data)=> {
    return {
        type : POST_CART_SUCCESS,
        payload : data
    }
}
export const fetchPostCartFailure = (err)=> {
    return {
        type : POST_CART_FAILURE ,
        payload : err
    }
}