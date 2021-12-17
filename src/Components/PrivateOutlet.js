import { Outlet ,Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateOutlet=() =>{
    const selector = useSelector(state => state.isLogin)
    // console.log(`App : ${(selector)}`)
    const auth = selector
    return auth ? <Outlet /> : <Navigate to="/signin" />;
}
export default PrivateOutlet;
