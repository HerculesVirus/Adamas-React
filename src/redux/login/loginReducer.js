import { LOGIN } from "./loginTypes";

const isLogin ={ 
    bool : false
}
const LoginReducer = (state = isLogin ,action) => {
    switch(action.type){
        case LOGIN:
            console.log(`Reducer : ${action.payload}`)
            return {
                ...state , 
                bool : action.payload
            };
        default: return state
    }
    
}

export default LoginReducer;