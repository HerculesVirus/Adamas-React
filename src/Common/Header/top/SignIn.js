import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/react-fontawesome";
import jwt from 'jsonwebtoken';
import { useState, useEffect} from 'react';
import { useSelector } from "react-redux";

const SignIn =(props)  => {

    const [check , setCheck] = useState(false);
    const LoginState = useSelector(state => state.bool)
    console.log(`LoginState : ${LoginState}`)
    let navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        console.log(`It is useEffect check : ${check}`)
        console.log(`token : ${token}`)
        
         if(token){
            setCheck(true)
        }   
    },[check]) 
    const handleLogout = ()=> {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(user){
                setCheck(false)
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
            {LoginState ?
            <>
            <li className="text-decoration-none text-light slash">"Welcome to Adamas</li>
             <li><Link className="text-decoration-none text-light slash" to="#" onClick={()=>handleLogout()}> LOGOUT</Link></li>
            </>
            
            :
            <>
            <li><Link className="text-decoration-none text-light slash" to="/signin">SIGN IN </Link></li>
            <li><Link className="text-decoration-none text-light slash" to="/register" > REGISTER</Link></li>
            </>
            }
            
            
            <li><Link className="text-decoration-none text-light" to="#">   YOUR CART (0)</Link></li>
        </ul>        
    )
}

export default SignIn;