import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./ProductTypes"

const initialState = { 
    loading : true , 
    data : '' ,
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
                loading : false ,
                data : action.payload
            }
        case PRODUCT_FAILURE:
            return {
                loading : false ,
                error : action.payload
            }
        default: return state
    }

}

export default ProductReducer;