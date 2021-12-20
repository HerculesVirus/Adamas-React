//ProductSection
import axios from "axios"; 
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./ProductTypes";


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
