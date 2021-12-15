import { LOGIN } from "./loginTypes";

const isLoginAction = (bool) => {
    return {
        type : LOGIN ,
        payload : bool
    }
}
export default isLoginAction