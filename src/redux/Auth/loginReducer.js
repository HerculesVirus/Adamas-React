import { 
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
    FETCH_LOGIN_REQUEST,
    FETCH_LOGOUT_REQUEST,
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE
} from "./loginTypes";


const initialState = {
    isLogin : false,
    user : '',
    data : '' ,
    error : null 
} 

const LoginReducer = (state = initialState , action) => {
    switch(action.type){
        case FETCH_LOGIN_REQUEST:
            return{
                ...state , 
                isLogin : false
            }
        case FETCH_LOGOUT_REQUEST:
            return{
                isLogin  : false,
                user: action.payload,
                error : null
            }
        case FETCH_LOGIN_SUCCESS:
            // console.log(`FETCH_LOGIN ${action.payload}`)
            return {
                user : action.payload ,
                isLogin  : true
                
            }
        case FETCH_LOGIN_FAILURE:
            // console.log(`FETCH_FAILURE ${action.payload}`)
            return{
                error : action.payload ,
                isLogin  : false
            }
        case FETCH_REGISTER_REQUEST:
            return{
                ...state,
                isLogin : false
            }
        case FETCH_REGISTER_SUCCESS:
            return{
                ...state,
                data : action.payload ,
                isLogin : true
            }
        case FETCH_REGISTER_FAILURE:
            return{
                ...state ,
                error : action.payload ,
                isLogin : false
            }
        default: return state
    }
    
}


export default LoginReducer;