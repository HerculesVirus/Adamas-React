import { Link } from "react-router-dom";
import "@fortawesome/react-fontawesome";

const Left = () => {
    return(
        <ul class="d-flex list-unstyled my-auto flex-wrap flex-lg-nowrap">
            <li ><Link class="text-decoration-none text-light"to="#"><i class="far fa-mobile-android text-light px-2"></i>+565 975 658</Link></li>
            <li ><Link class="text-decoration-none text-light"to="#"><i class="fas fa-envelope text-light px-2"></i>info@premiumcoding.com</Link></li>
            <li ><Link class="text-decoration-none text-light"to="#"><i class="far fa-clock text-light px-2"></i>Monday - Friday, 8.00 - 20.00</Link></li>
        </ul>
    )
}

export default Left;