import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/react-fontawesome";
import jwt from 'jsonwebtoken';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import isLoginAction from "../../../redux/login/loginAction";

const SignIn =(props)  => {

    const [check , setCheck] = useState(false);
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const token = localStorage.getItem('token')
    const selector  = useSelector( state => state.bool)
    
    useEffect(()=>{       
        // eslint-disable-next-line react-hooks/exhaustive-deps
         if(token){
            setCheck(selector)
        }
    },[token,selector]) 
    const handleLogout = ()=> {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(user){
                console.log(`Logout User`)
                setCheck(false)
                dispatch(isLoginAction(false))
                localStorage.removeItem('token')
                navigate('/')

            }
            else{
                console.log('Can not be Logout')
            }
            
        }
    }
    return(
        
        <ul className="d-flex list-unstyled align-items-center my-auto">
            {console.log(`check :  ${check}`)}
            {selector ?
            <>
            {/* <li className="text-decoration-none text-light slash">Welcome to Adamas</li> */}
            <li><Link className="text-decoration-none text-light" to="#" onClick={()=>handleLogout()}> LOGOUT</Link></li>
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