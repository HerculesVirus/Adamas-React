import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/react-fontawesome";
import jwt from 'jsonwebtoken';
import { useSelector , useDispatch} from "react-redux";
import { fetchLogoutRequest } from "../../../redux/Auth/loginAction";
import { useEffect, useState } from "react";
import CartDropDown from '../../../Components/Cart/CartDropDown'
//MUI


const SignIn =(props)  => {

    //State
    const [hidden , setHidden] = useState(true)
    //
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogin  = useSelector( state => state.auth.isLogin)
    const full = useSelector( state => state.auth)
    const Products = useSelector( state => state.cart.data)
    console.log(Products)
    //Count Carts
    const [countCart , setCountCart] = useState(0)
    useEffect(()=>{
        if(Products){
            setCountCart(Products.length)
        }
    },[Products])


    //using Old technique Jwt
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
    // const toggleHidden = ()=>{
    //     setHidden(!hidden);
    // }
    const handleDropDown = ()=>{
        console.log(`Button is pressed`)
        setHidden(!hidden);
    }
    return(
        <>
        <ul className="d-flex list-unstyled align-items-center my-auto">
            {isLogin ?
            <>
                <li className="text-decoration-none text-light slash">{full && full.user.user?.email}</li>
                <li><Link className="text-decoration-none text-light slash" to="#" onClick={()=>handleLogout()}> LOGOUT</Link></li>
                <li><button className="text-decoration-none text-light" onClick={() => handleDropDown()} >   YOUR CART ({countCart})</button></li> 
                
                {/*mui Modal */}

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
        {console.log(`hidden : ${hidden}`)}    
        <div>
            {hidden ? 
            <>
                {/* <div><button className="text-decoration-none text-light" onClick={() => handleDropDown()} >   YOUR CART ({countCart})</button></div> */}
            </> 
            : 
            <>
                <CartDropDown cardList={Products}/>
            </>
            }   
        </div>
        </>
    )
}

export default SignIn;