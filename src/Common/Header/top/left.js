import { Link } from "react-router-dom";
import "@fortawesome/react-fontawesome";

const Left = () => {
    return(
        <ul className="d-flex list-unstyled my-auto flex-wrap flex-lg-nowrap">
            <li ><Link className="text-decoration-none text-light"to="#"><i className="fa fa-mobile text-light px-2"></i>+565 975 658</Link></li>
            <li ><Link className="text-decoration-none text-light"to="#"><i className="fa fa-envelope text-light px-2"></i>info@premiumcoding.com</Link></li>
            <li ><Link className="text-decoration-none text-light"to="#"><i className="fa fa-clock-o text-light px-2"></i>Monday - Friday, 8.00 - 20.00</Link></li>
        </ul>
    )
}

export default Left;