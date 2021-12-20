
//1-Could not Make The flow of this Shop Category so {`Go with a Flow`}

import { SHOP_REQUEST, SHOP_SELECTED_ID, SHOP_SUCCESS } from "./ShopTypes"
import axios from "axios"

export const fetchCategoryShop = (id ,currentPage)=>{
    return (dispatch) => {
        dispatch(fetchCategoryShopRequest())
        //SetProduct of Selected Shortlist Product
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
        .catch(err => console.log(err))      
        // }
        // else{
        //     console.log(`else`)
        //     //SetProduct of ALL Product
        //     axios({
        //         method : 'get' ,
        //         url : `http://localhost:8000/api/publicsite/category/product?page=${currentPage}` ,
        //         headers:{
        //             'x-access-token': localStorage.getItem('token')
        //         }
        // })
        //     .then( res =>{
        //         const Pages =res.data.totalPages
        //         const data =res.data.data
        //         dispatch(fetchCategoryShopSuccess({data, Pages}))
        //     })
        // }
        
    }
}

export const fetchCategoryShopRequest = () => {
    return{
        type : SHOP_REQUEST
    }
}

export const setCategoryShop = (data) => {
    return  {
        type : SHOP_SELECTED_ID ,
        payload : data
    }
}

export const fetchCategoryShopSuccess = (ID) => {
    return {
        type : SHOP_SUCCESS ,

    }
}

