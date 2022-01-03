import axios from 'axios'
import {
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAILURE , 

    POST_CART_REQUEST ,
    POST_CART_SUCCESS , 
    POST_CART_FAILURE ,

    PUT_CART_REQUEST ,
    PUT_CART_SUCCESS ,
    PUT_CART_FAILURE ,

    
    DEL_CART_REQUEST ,
    DEL_CART_SUCCESS ,
    DEL_CART_FAILURE 

} from './cartTypes'

//GET------------------------------
export const getCart = (id,callback) => {
    return(dispatch)=>{
        console.log(`Why you running`)
        getCartRequest()
        if(id){
            axios.get(`http://localhost:8000/api/publicsite/Cart?id=${id?id:''}`)
            .then((res) => {
                let data = res.data
                console.log(data) //issue is here
                dispatch(getCartSuccess(data,callback))
                callback(data)
            })
            .catch(err => dispatch(getCartFailure(err)))
        }
    }    
}
//Action Creator
export const getCartRequest = ()=> {
    return {
        type : GET_CART_REQUEST
    }
}
export const getCartSuccess = (data)=> {
    return {
        type : GET_CART_SUCCESS,
        payload : data
    }
}
export const getCartFailure = (err)=> {
    return {
        type : GET_CART_FAILURE ,
        payload : err
    }
}
//POST-----------------------------
export const postCart = (id ,data,callback)=>{
    return(dispatch)=>{
        if(id){
            console.log(`fetchPostCart`)
            console.log(data)
            postCartRequest()
            //create a cart
            axios.post(`http://localhost:8000/api/publicsite/Cart?id=${id?id:''}` , data)
            .then(res =>{
                let massage = res.data.message
                console.log(massage)
                dispatch(postCartSuccess(massage))
                callback(massage)
            } )
            .catch(err => dispatch(postCartFailure(err)))
        }
        else{
            console.log(`Hello from the fetchPostCart`)
        }
    }
}
//Action Creator
export const postCartRequest = ()=> {
    return {
        type : POST_CART_REQUEST , 
        message : ''
    }
}
export const postCartSuccess = (data)=> {
    return {
        type : POST_CART_SUCCESS,
        payload : data
    }
}
export const postCartFailure = (err)=> {
    return {
        type : POST_CART_FAILURE ,
        payload : err
    }
}

//Update---------------------------------
export const updateCart =(cartItem,Qty,callback)=>{
    return(dispatch)=>{
        
            console.log(`fetchPostCart`)
            console.log("cartItem : ",cartItem, "Qty : ",Qty)
            const data ={cartItem,Qty}
            updateCartRequest()
            //create a cart
            axios.put(`http://localhost:8000/api/publicsite/Cart`,data)
            .then(res =>{
                let  data = res.data
                console.log(data)
                dispatch(updateCartSuccess(data))
                callback(data)
            } )
            .catch(err => dispatch(updateCartFailure(err)))
        
    }
}
//Action Creator
export const updateCartRequest =()=>{
    return{
        type: PUT_CART_REQUEST   
    }
}
export const updateCartSuccess =(data)=>{
    return {
        type : PUT_CART_SUCCESS ,
        payload : data
    }
}
export const updateCartFailure =(err)=>{
    return {
        type : PUT_CART_FAILURE ,
        payload : err
    }
}
//DELETE------------------------------------
export const deleteCart = (cartItem)=>{
    return(dispatch)=>{
        
            console.log(`fetchDeleteCart`)
            console.log(cartItem)

            delRequest()
            //create a cart
            axios.delete(`http://localhost:8000/api/publicsite/CartDel` ,{data:cartItem})
            .then(res =>{
                let massage = res.data.message
                console.log(massage)
                dispatch(deleteCartSuccess(massage))
                
            } )
            .catch(err => dispatch(deleteCartFailure(err)))
    }
}
//Action Creater --------------------------------
export const delRequest=()=>{
    return{
        type : DEL_CART_REQUEST
    }
}
export const deleteCartSuccess=(data)=>{
    return{
        type : DEL_CART_SUCCESS ,
        payload : data
    }
}
export const deleteCartFailure =(err)=>{
    return {
        type : DEL_CART_FAILURE ,
        payload : err
    }
}