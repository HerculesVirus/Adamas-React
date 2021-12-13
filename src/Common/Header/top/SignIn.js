import { Link } from "react-router-dom";
import "@fortawesome/react-fontawesome";
import jwt from 'jsonwebtoken';
import { useState, useEffect} from 'react';

const SignIn =(props)  => {

    const [check , setCheck] = useState(false);
    useEffect(()=>{
        const token = localStorage.getItem('token')
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
            }
            else{
                console.log('Can not be Logout')
            }
            
        }
    }
    return(
        <ul className="d-flex list-unstyled align-items-center my-auto">
            {check ?
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