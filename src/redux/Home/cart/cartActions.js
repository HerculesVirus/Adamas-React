import axios from 'axios'
import {
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAILURE , 

    POST_CART_REQUEST ,
    POST_CART_SUCCESS , 
    POST_CART_FAILURE 
} from './cartTypes'

export const fetchPostCart = (id ,data)=>{
    return(dispatch)=>{
        if(id){
            console.log(data)
            fetchPostCartRequest()
            //create a cart
            axios.post(`http://localhost:8000/api/publicsite/Cart?id=${id?id:''}` , data)
            .then(res =>{
                let massage = res.message
                dispatch(fetchPostCartSuccess(massage))
            } )
            .catch(err => dispatch(fetchPostCartFailure(err)))
        }
        else{
            console.log(`Hello form the fetchPostCart`)
        }
    }
}
// export const fetchGetCart = (id) => {
//     return(dispatch)=>{
//         fetchGetCartRequest()
//         if(id){
//             axios.get(`http://localhost:8000/api/publicsite/cartItem?id=${id?id:''}`)

//         }
       
//     }    
// }
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