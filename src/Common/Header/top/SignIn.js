import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/react-fontawesome";
import jwt from 'jsonwebtoken';
import { useSelector , useDispatch} from "react-redux";
import { fetchLogout } from "../../../redux/Auth/loginAction";
import { useState } from "react";
import CartDropDown from '../../../Components/Cart/CartDropDown'
import { getCart } from "../../../redux/Home/cart/cartActions";
//MUI


const SignIn =(props)  => {

    //Local State
    const [hidden , setHidden] = useState(true)
    //Hooks
    let navigate = useNavigate()
    const dispatch = useDispatch()
    //boolean to check user Login or not
    const isLogin  = useSelector( state => state.auth?.isLogin)
    //User is Autherized or not
    const user = useSelector( state => state.auth?.user)
    //HOOK FOR user id 
    const userID = useSelector(state => state.auth?.user?._id)
    //console.log(`userID : ${userID}`) 
    //cart
    // const obj = useSelector(state => state.cart)
    //console.log(obj)
    const cartSize = useSelector(state => state.cart?.data.length)
    //console.log(cart)
    // const[numberOfCart , setNumberOfCart] = useState(cart ? cart.length : yourCart ? yourCart: 0)

    //using Old technique Jwt
    const handleLogout = ()=> {
        // const token = localStorage.getItem('token')
        // if(token){
        //     const user = jwt.decode(token)
            if(userID){
                // console.log(`Logout User`)
                // localStorage.removeItem('token')
                dispatch(fetchLogout())
                navigate('/')
            }
            else{
                console.log('Can not be Logout')
            }
        // }
    }
    const handleDropDown = ()=>{
        //console.log(`Button is pressed`)
        dispatch(getCart(userID))
        setHidden(!hidden);
    }
    const toggle= ()=>{
        //console.log("Your Cart toggle is working")
        setHidden(true)
    }
    return(
        <>
        {/* {console.log(`numberOfCart : ${numberOfCart}`)} */}
        <ul className="d-flex list-unstyled align-items-center my-auto">
            {isLogin !==(null || undefined) && userID !==(null || undefined)  && user!== (null ||undefined)?
            <>
                <li className="text-decoration-none text-light slash">{user && user.email}</li>
                <li><Link className="text-decoration-none text-light slash" to="#" onClick={()=>handleLogout()}> LOGOUT</Link></li>
                <li><button className="text-decoration-none text-light" onClick={() => handleDropDown()} >   YOUR CART ({cartSize})</button></li> 
                
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
        {/* {console.log(`hidden : ${hidden}`)}     */}
        <div>
            {hidden  ? 
            <>
            </> 
            : 
            <>
                <CartDropDown show={toggle}/>
            </>
            }   
        </div>
        </>
    )
}

export default SignIn;