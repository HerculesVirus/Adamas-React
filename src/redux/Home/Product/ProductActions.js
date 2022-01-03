//ProductSection
import axios from "axios"; 
import { FEATURED_PRODUCT_FAILURE, FEATURED_PRODUCT_REQUEST, FEATURED_PRODUCT_SUCCESS, LATEST_PRODUCT_FAILURE, LATEST_PRODUCT_REQUEST, LATEST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./ProductTypes";


export const fetchProduct = ()=> {
    return(dispatch) => {
        dispatch(fetchProductRequest())
        axios.get(`http://localhost:8000/api/publicsite/product`)
        .then(res =>{
            const product = res.data
            // console.log(`Product Actions`)
            // console.log(product)
            dispatch(fetchProductSucess(product))
        })
        .catch( err => dispatch(fetchProductFailure(err)))    
    }
}


//-----------------------------Featured
export const featuredProduct = ()=> {
    return(dispatch) => {
        dispatch(featuredRequest())
        axios.get(`http://localhost:8000/api/publicsite/product/featured`)
        .then(res =>{
            const featuredProduct = res.data
            // console.log(`Product Actions`)
            // console.log(product)
            dispatch(faturedSucess(featuredProduct))
        })
        .catch( err => dispatch(featuredFailure(err)))    
    }
}
export const featuredRequest = ()=> {
    return { 
        type : FEATURED_PRODUCT_REQUEST
    }
}
export const faturedSucess = (data) => {
    return {
        type : FEATURED_PRODUCT_SUCCESS ,
        payload  : data
    }
}
export const featuredFailure = error => {
    return {
        type : FEATURED_PRODUCT_FAILURE , 
        payload : error
    }
}
//-------------------------------------
//-----------------------------Latest
export const latestProduct = ()=> {
    return(dispatch) => {
        dispatch(latestRequest())
        axios.get(`http://localhost:8000/api/publicsite/product/latest`)
        .then(res =>{
            const product = res.data
            // console.log(`Product Actions`)
            // console.log(product)
            dispatch(latestSucess(product))
        })
        .catch( err => dispatch(latestFailure(err)))    
    }
}
export const latestRequest = ()=> {
    return { 
        type : LATEST_PRODUCT_REQUEST
    }
}
export const latestSucess = (data) => {
    return {
        type : LATEST_PRODUCT_SUCCESS ,
        payload  : data
    }
}
export const latestFailure = error => {
    return {
        type : LATEST_PRODUCT_FAILURE , 
        payload : error
    }
}
//-------------------------------------
export const fetchProductSucess = (data) => {
    return {
        type : PRODUCT_SUCCESS ,
        payload  : data
    }
}

export const fetchProductRequest = ()=> {
    return { 
        type : PRODUCT_REQUEST
    }
}

export const fetchProductFailure = error => {
    return {
        type : PRODUCT_FAILURE , 
        payload : error
    }
}
