import {  
    GET_CART_REQUEST, 
    GET_CART_SUCCESS ,
    GET_CART_FAILURE , 

    POST_CART_FAILURE, 
    POST_CART_REQUEST, 
    POST_CART_SUCCESS,

    PUT_CART_REQUEST,
    PUT_CART_SUCCESS,
    PUT_CART_FAILURE, 

    DEL_CART_REQUEST,
    DEL_CART_SUCCESS,
    DEL_CART_FAILURE,
    SUMBIT_ORDER_PRICE
    
} from "./cartTypes";

const initialState = {
    loading : false ,
    data : '' ,
    total : '' ,
    yourCartSize : '' ,
    msg : '' ,
    error : ''
}

const CartReducer = (state = initialState , action) => {
    switch(action.type){
        //GET ACTIONS
        case GET_CART_REQUEST:
            return{
                ...state ,
                loading : true ,
            }
        case GET_CART_SUCCESS:
            return{
                    ...state ,
                    loading : false ,
                    data : action.payload
                }
        case GET_CART_FAILURE:
            return{
                ...state ,
                loading : false,
                error : action.payload
            }
        //POST ACTIONS
        case POST_CART_REQUEST:
            return{
                ...state,
                loading : true ,
            }
        case POST_CART_SUCCESS:
            return{
                ...state,
                loading : false ,
                data : action.payload
            }
        case POST_CART_FAILURE:
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        //PUT Actions
        case PUT_CART_REQUEST:
            return{
                ...state,
                loading : true ,
        }
        case PUT_CART_SUCCESS:
            return{
                    ...state,
                    loading : false ,
                    msg : action.payload
                }
        case PUT_CART_FAILURE:
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        //DELETE ACTIONS
        case DEL_CART_REQUEST:
            return{
                ...state,
                loading : true ,
            }
        case DEL_CART_SUCCESS:
            return{
                ...state ,
                loading : false ,
                data : action.payload
            }
        case DEL_CART_FAILURE:
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        case SUMBIT_ORDER_PRICE:
            return {
                ...state ,
                total: action.payload
            }
        default : return state
    }
}

export default CartReducer;