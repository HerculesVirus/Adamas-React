import { Outlet ,Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateOutlet=() =>{
    const selector = useSelector(state => state.auth.isLogin)
    const auth = selector
    return auth ? <Outlet /> : <Navigate to="/signin" />;
}
export default PrivateOutlet;
