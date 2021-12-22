import axios from 'axios';
import {  PRODUCTPREVIEW_REQUEST ,PRODUCTPREVIEW_SUCCESS , PRODUCTPREVIEW_FAILURE } from './ProductPreviewTypes'

export const fetchProductPreview =  (id)=>{
    return(dispatch) => {
        dispatch(fetchProductPreviewRequest())
        axios.get(`http://localhost:8000/api/publicsite/ProductPreview/${id}`)
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