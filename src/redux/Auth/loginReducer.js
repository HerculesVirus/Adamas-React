import { 
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,


    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE,

    FETCH_LOGOUT_REQUEST,
    FETCH_LOGOUT_SUCCESS,
    FETCH_LOGOUT_FAILURE
    
} from "./loginTypes";


const initialState = {
    isLogin : false,
    user : '',
    data : '' ,
    msg : '' ,
    error : null 
} 

const LoginReducer = (state = initialState , action) => {
    switch(action.type){
        case FETCH_LOGIN_REQUEST:
            return{
                ...state , 
                isLogin : false
            }

        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                user : action.payload ,
                isLogin  : true 
            }
        case FETCH_LOGIN_FAILURE:
            return{
                ...state,
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
        case FETCH_LOGOUT_REQUEST:
            return{
                ...state,
                isLogin  : true,
            }
        case FETCH_LOGOUT_SUCCESS:
            console.log(`logout case Sucess is working`)
            return{
                ...state,
                isLogin : action.payload.isLogin ,
                user : action.payload.user ,
                msg: action.payload.msg ? action.payload.msg : ''
            }
        case FETCH_LOGOUT_FAILURE:
            return{
                ...state ,
                isLogin : true ,
                err : action.payload
            }
        default: return state
    }
    
}


export default LoginReducer;