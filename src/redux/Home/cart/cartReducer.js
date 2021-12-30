import {  
    GET_CART_REQUEST, 
    GET_CART_SUCCESS ,
    GET_CART_FAILURE , 

    POST_CART_FAILURE, 
    POST_CART_REQUEST, 
    POST_CART_SUCCESS 
} from "./cartTypes";

const initialState = {
    loading : false ,
    data : '' ,
    error : ''
}

const CartReducer = (state = initialState , action) => {
    switch(action.type){
        //POST ACTIONS
        case POST_CART_REQUEST:
            return{
                loading : true ,
            }
        case POST_CART_SUCCESS:
            return{
                loading : false ,
                data : action.payload
            }
        case POST_CART_FAILURE:
            return{
                loading : false,
                error : action.payload
            }
        //GET ACTIONS
        case GET_CART_REQUEST:
            return{
                loading : true ,
        }
        case GET_CART_SUCCESS:
            return{
                    loading : false ,
                    data : action.payload
                }
        case GET_CART_FAILURE:
                return{
                    loading : false,
                    error : action.payload
                }
        default : return state
    }
}

export default CartReducer;