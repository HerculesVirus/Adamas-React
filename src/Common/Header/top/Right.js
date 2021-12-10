import { Link } from "react-router-dom";
import "@fortawesome/react-fontawesome";

const Right =()  => {
    return(
        <ul className="d-flex list-unstyled align-items-center my-auto">
            <li><Link className="text-decoration-none text-light slash" to="/signin">SIGN IN </Link></li>
            <li><Link className="text-decoration-none text-light " to="/register"> REGISTER</Link></li>
            <li><Link className="text-decoration-none text-light" to="#"> YOUR CART (0)</Link></li>
        </ul>        
    )
}

export default Right;