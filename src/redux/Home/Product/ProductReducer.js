import { FEATURED_PRODUCT_FAILURE, FEATURED_PRODUCT_REQUEST, FEATURED_PRODUCT_SUCCESS, LATEST_PRODUCT_FAILURE, LATEST_PRODUCT_REQUEST, LATEST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./ProductTypes"

const initialState = { 
    loading : true , 
    data : '' ,
    featuredData : '' ,
    latestData : '',
    error : ''
}

const ProductReducer = (state = initialState , action)=> {
    switch (action.type){
        case PRODUCT_REQUEST:
            return {
                ...state,
                loading : true
            }
        case PRODUCT_SUCCESS:
            return { 
                ...state,
                loading : false ,
                data : action.payload
            }
        case PRODUCT_FAILURE:
            return {
                ...state ,
                loading : false ,
                error : action.payload
            }
        case FEATURED_PRODUCT_REQUEST:
            return{
                ...state , 
                loading : true 
            }
        case FEATURED_PRODUCT_SUCCESS:
            return {
                ...state,
                loading : false , 
                featuredData : action.payload
            }
        case FEATURED_PRODUCT_FAILURE:
            return{
                ...state ,
                loading : false ,
                error : action.payload
            }
        case LATEST_PRODUCT_REQUEST:
                return{
                    ...state, 
                    loading : true 
                }
        case LATEST_PRODUCT_SUCCESS:
                return {
                    ...state,
                    loading : false , 
                    latestData : action.payload
                }
        case LATEST_PRODUCT_FAILURE:
                return{
                    ...state ,
                    loading : false ,
                    error : action.payload
                }
        default: return state
    }

}

export default ProductReducer;