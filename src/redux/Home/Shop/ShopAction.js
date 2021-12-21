
//1-Could not Make The flow of this Shop Category so {`Go with a Flow`}

import { SHOP_FAILURE, SHOP_REQUEST, SHOP_SUCCESS } from "./ShopTypes"
import axios from "axios"

export const fetchCategoryShop = (id ,currentPage)=>{
    return (dispatch) => {
        dispatch(fetchCategoryShopRequest())
        //BOTH Products should decision here
        console.log('FetchCategoryShop : ')
        console.log(id)
        axios({
            method : 'get' ,
            url:`http://localhost:8000/api/publicsite/category/product?page=${currentPage}&id=${id?id:''}` ,
            headers:{
                'x-access-token': localStorage.getItem('token')
            }
        })
        .then( res =>{
                const Totalpages = res.data.totalPages 
                const data = res.data.data
                console.log('FetchShop Res : ')
                console.log(data)
                dispatch(fetchCategoryShopSuccess({data, Totalpages}))
            }
        )
        .catch(err => fetchCategoryShopFailure(err))    
    }
}

export const fetchCategoryShopRequest = () => {
    return{
        type : SHOP_REQUEST
    }
}

export const fetchCategoryShopSuccess = (data) => {
    return {
        type : SHOP_SUCCESS ,
        payload : data

    }
}
export const fetchCategoryShopFailure = (error)=> {
    return { 
        type : SHOP_FAILURE ,
        payload : error
    }
}
