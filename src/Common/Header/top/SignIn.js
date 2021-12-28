import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/react-fontawesome";
import jwt from 'jsonwebtoken';
import { useSelector , useDispatch} from "react-redux";
import { fetchLogoutRequest } from "../../../redux/Auth/loginAction";
import { useEffect, useState } from "react";


const SignIn =(props)  => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogin  = useSelector( state => state.auth.isLogin)
    const full = useSelector( state => state.auth)
    const Products = useSelector( state => state.cart.data)
    //console.log(Products)

    const [countCart , setCountCart] = useState(0)
    useEffect(()=>{
        if(Products){
            setCountCart(Products.length)
        }
    },[Products])



    const handleLogout = ()=> {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(user){
                console.log(`Logout User`)
                localStorage.removeItem('token')
                dispatch(fetchLogoutRequest())
                navigate('/')
            }
            else{
                console.log('Can not be Logout')
            }
        }
    }

    return(
        <ul className="d-flex list-unstyled align-items-center my-auto">
            {isLogin ?
            <>
                <li className="text-decoration-none text-light slash">{full && full.user.user?.email}</li>
                <li><Link className="text-decoration-none text-light slash" to="#" onClick={()=>handleLogout()}> LOGOUT</Link></li>
                <li><Link className="text-decoration-none text-light" to="/Cartlist" >   YOUR CART ({countCart})</Link></li> 
            </>
            :
            <>
                {/* <li><Link className="text-decoration-none text-light slash" to="#" onClick={()=>handleLogout()}> LOGOUT</Link></li> */}
                <li><Link className="text-decoration-none text-light slash" to="/signin">SIGN IN </Link></li>
                <li><Link className="text-decoration-none text-light slash" to="/register" > REGISTER</Link></li>
                <li><Link className="text-decoration-none text-light" to="#">   YOUR CART (0)</Link></li>    
            </>
            }            
        </ul>        
    )
}

export default SignIn;