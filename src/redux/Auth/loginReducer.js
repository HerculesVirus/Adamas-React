import { 
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
    FETCH_LOGIN_REQUEST,
    FETCH_LOGOUT_REQUEST
} from "./loginTypes";


const initialState = {
    isLogin : false,
    loading : false ,
    user : '',
    error : null
} 

const LoginReducer = (state = initialState , action) => {
    switch(action.type){
        case FETCH_LOGIN_REQUEST:
            return{
                ...state , 
                loading : true
            }
        case FETCH_LOGOUT_REQUEST:
            return{
                loading: false ,
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
        default: return state
    }
    
}


export default LoginReducer;