import {  PRODUCTPREVIEW_REQUEST ,PRODUCTPREVIEW_SUCCESS , PRODUCTPREVIEW_FAILURE } from './ProductPreviewTypes'

const initialState = { 
    loading : true , 
    data : '' ,
    error : ''
}



const ProductPreviewReducer = (state = initialState , action)=> {
    switch (action.type){
        case PRODUCTPREVIEW_REQUEST:
            return {
                loading : true
            }
        case PRODUCTPREVIEW_SUCCESS:
            return { 
                loading : false ,
                data : action.payload
            }
        case PRODUCTPREVIEW_FAILURE:
            return {
                loading : false ,
                error : action.payload
            }
        default: return state
    }

}
export default ProductPreviewReducer;