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
    DEL_CART_FAILURE, 
    
} from './cartTypes'

//GET------------------------------
export const getCart = (id) => {
    return(dispatch)=>{
        console.log(`Why you running`)
        getCartRequest()
        if(id){
            let sum=0
            axios.get(`${process.env.REACT_APP_URL}/v1/site-cart/Cart?id=${id?id:''}`,{withCredentials: true})
            .then((res) => {
                let data = res.data
                data.map(item =>{
                    //console.log(`item.Qty :  ${item.Qty} , item.productInfo.price : ${item.productInfo.price}`)
                    return (sum = sum + (parseInt(item.Qty) * parseInt(item.productInfo.price)))
                   
                })
                // console.log(`sum : ${sum}`)
                // console.log(data) //issue is here
                dispatch(getCartSuccess(data ,sum))
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
export const getCartSuccess = (data,sum)=> {
    return {
        type : GET_CART_SUCCESS,
        payload : {data: data ,sum : sum}
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
            // console.log(data)
            postCartRequest()
            //create a cart
            axios.post(`${process.env.REACT_APP_URL}/v1/site-cart/Cart?id=${id?id:''}` , data , {withCredentials: true})
            .then(res =>{
                let message = res.data.message
                let data = res.data?.data
                let sum = 0
                // console.log(res.data)
                // console.log(message)
                if(data){
                    data.map(item =>{
                        console.log(`item.Qty :  ${item.Qty} , item.productInfo.price : ${item.productInfo.price}`)
                        return (sum = sum + (parseInt(item.Qty) * parseInt(item.productInfo.price)))
                    })
                }
                dispatch(postCartSuccess(message,sum,data))
                callback(message)
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
export const postCartSuccess = (message ,sum, data)=> {
    return {
        type : POST_CART_SUCCESS,
        payload : {message:message , sum:sum , data:data}
    }
}
export const postCartFailure = (err)=> {
    return {
        type : POST_CART_FAILURE ,
        payload : err
    }
}

//Update---------------------------------
export const updateCart =(id,Qty,user)=>{
    return(dispatch)=>{
        
            console.log(`updateCart`)
            // console.log("cartItem : ",cartItem, "updated Qty : ",Qty)
            updateCartRequest()
            //create a cart
            axios.put(`${process.env.REACT_APP_URL}/v1/site-cart/CartUpdate/${id}`,{data :{Qty,user}  })
            .then(res =>{
                let  data = res.data.data
                let message = res.data.message
                let sum =0
                // console.log(message)
                // console.log(data)
                data.map(item =>{
                    console.log(`item.Qty :  ${item.Qty} , item.productInfo.price : ${item.productInfo.price}`)
                    return (sum = sum + (parseInt(item.Qty) * parseInt(item.productInfo.price)))
                })
                // console.log(`sum : ${sum}`)
                dispatch(updateCartSuccess(message,sum ,data))
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
export const updateCartSuccess =(message ,sum ,data)=>{
    return {
        type : PUT_CART_SUCCESS ,
        payload : {message : message ,sum : sum , data : data}
    }
}
export const updateCartFailure =(err)=>{
    return {
        type : PUT_CART_FAILURE ,
        payload : err
    }
}
//DELETE------------------------------------
export const deleteCart = (cartItem,callback)=>{
    return(dispatch)=>{
        
            console.log(`fetchDeleteCart`)
            console.log(cartItem)

            delRequest()
            //create a cart
            axios.delete(`${process.env.REACT_APP_URL}/v1/site-cart/CartDel` ,{data:cartItem})
            .then(res =>{
                let data = res.data
                let sum=0
                // console.log(data)
                data.map(item => {
                    console.log(`item.Qty :  ${item.Qty} , item.productInfo.price : ${item.productInfo.price}`)
                    return (sum = sum + (parseInt(item.Qty) * parseInt(item.productInfo.price)))
                })
                dispatch(deleteCartSuccess(data ,sum))
                callback(data)
                
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
export const deleteCartSuccess=(data ,sum)=>{
    return{
        type : DEL_CART_SUCCESS ,
        payload : {data: data , sum : sum}
    }
}
export const deleteCartFailure =(err)=>{
    return {
        type : DEL_CART_FAILURE ,
        payload : err
    }
}

//set Total

