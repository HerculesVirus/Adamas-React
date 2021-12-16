import { LOGIN ,
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE
} from "./loginTypes";

const token = localStorage.getItem('token')
const isLogin = token ? { 
    bool : true , user : [] , err : ''
  } : {bool : false , user : [] , err : ''}
const LoginReducer = (state = isLogin,action) => {
    switch(action.type){
        case LOGIN:
            console.log(`Reducer : ${action.payload}`)
            return {
                bool : action.payload
            };
        case FETCH_LOGIN_SUCCESS:
            console.log(`FETCH_LOGIN ${action.payload}`)
            return {
                user : action.payload
                
            }
        case FETCH_LOGIN_FAILURE:
            console.log(`FETCH_FAILURE ${action.payload}`)
            return{
                err : action.payload
            }
        default: return state
    }
    
}


export default LoginReducer;