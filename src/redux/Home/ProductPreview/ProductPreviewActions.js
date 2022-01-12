import axios from 'axios';
import {  PRODUCTPREVIEW_REQUEST ,PRODUCTPREVIEW_SUCCESS , PRODUCTPREVIEW_FAILURE } from './ProductPreviewTypes'

export const fetchProductPreview =  (id)=>{
    return(dispatch) => {
        console.log(id)
        dispatch(fetchProductPreviewRequest())
        axios.get(`${process.env.REACT_APP_URL}/v1/site-product/ProductPreview/${id}`,{withCredentials: true})
        .then(res =>{
            const product = res.data
            // console.log(`Product Actions`)
            // console.log(product)
            dispatch(fetchProductPreviewSucess(product))
        })
        .catch( err => dispatch(fetchProductPreviewFailure(err)))    
    }
    
}

export const fetchProductPreviewRequest = ()=>{
    return {
        type :  PRODUCTPREVIEW_REQUEST
    }
}

export const fetchProductPreviewSucess = (data)=>{
    return {
        type : PRODUCTPREVIEW_SUCCESS , 
        payload : data
    }
}

export const fetchProductPreviewFailure = (err) => {
    return {
        type : PRODUCTPREVIEW_FAILURE ,
        payload : err
    }
}