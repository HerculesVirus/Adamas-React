import { Link } from "react-router-dom";
import "@fortawesome/react-fontawesome";

const SignIn =()  => {
    return(
        <ul class="d-flex list-unstyled align-items-center my-auto">
            <li><Link class="text-decoration-none text-light slash" to="#">SIGN IN </Link></li>
            <li><Link class="text-decoration-none text-light " to="#"> REGISTER</Link></li>
            <li><Link class="text-decoration-none text-light" to="#">YOUR CART (0)</Link></li>
        </ul>        
    )
}

export default SignIn;