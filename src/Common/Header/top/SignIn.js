import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/react-fontawesome";
import jwt from 'jsonwebtoken';
import { useSelector , useDispatch} from "react-redux";
import { fetchLogoutRequest } from "../../../redux/Auth/loginAction";
import { useState } from "react";
import CartDropDown from '../../../Components/Cart/CartDropDown'
import { getCart } from "../../../redux/Home/cart/cartActions";
//MUI


const SignIn =(props)  => {

    //Local State
    const [Products , setProducts] = useState('')
    const [hidden , setHidden] = useState(true)
    //Hooks
    let navigate = useNavigate()
    const dispatch = useDispatch()
    //boolean to check user Login or not
    const isLogin  = useSelector( state => state.auth?.isLogin)
    //User is Autherized or not
    const full = useSelector( state => state?.auth)
    //HOOK FOR user id 
    const userID = useSelector(state => state.auth.user.user?._id)
    console.log(`userID : ${userID}`) 
    //cart
    const obj = useSelector(state => state.cart)
    console.log(obj)
    const cart = useSelector(state => state.cart?.data)
    console.log(cart)
    const[numberOfCart , setNumberOfCart] = useState(cart ? cart.length : 0)

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
    const handleDropDown = ()=>{
        console.log(`Button is pressed`)
        const callback= (data)=>{
            setNumberOfCart(data.length)
            setProducts(data)
        }
        dispatch(getCart(userID,callback))

        
        setHidden(!hidden);
    }
    const toggle= ()=>{
        //console.log("Your Cart toggle is working")
        setHidden(true)
    }
    return(
        <>
        {console.log(`numberOfCart : ${numberOfCart}`)}
        <ul className="d-flex list-unstyled align-items-center my-auto">
            {isLogin !==(null || undefined) && userID !==(null || undefined) ?
            <>
                <li className="text-decoration-none text-light slash">{full && full.user.user?.email}</li>
                <li><Link className="text-decoration-none text-light slash" to="#" onClick={()=>handleLogout()}> LOGOUT</Link></li>
                <li><button className="text-decoration-none text-light" onClick={() => handleDropDown()} >   YOUR CART ({numberOfCart})</button></li> 
                
                {/*mui Modal */}

            </>
            :
            <>
                {/* <li><Link className="text-decoration-none text-light slash" to="#" onClick={()=>handleLogout()}> LOGOUT</Link></li> */}
                <li><Link className="text-decoration-none text-light slash" to="/signin">SIGN IN </Link></li>
                <li><Link className="text-decoration-none text-light slash" to="/register" > REGISTER</Link></li>
                <li><Link className="text-decoration-none text-light" to="#">   YOUR CART ()</Link></li>    
            </>
            }            
        </ul> 
        {console.log(`hidden : ${hidden}`)}    
        <div>
            {hidden  ? 
            <>
            </> 
            : 
            <>
                <CartDropDown cardList={Products} show={toggle}/>
            </>
            }   
        </div>
        </>
    )
}

export default SignIn;