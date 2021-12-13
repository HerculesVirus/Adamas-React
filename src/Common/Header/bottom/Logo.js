import { Link } from "react-router-dom";

const Logo = () => {
    return(
        <strong className="logo d-inline-block">
        <Link to="/" className="d-inline-block">
            <img src="images/logo_header.png" className="img-fluid" alt="logo img"/>
        </Link>
      </strong>
    )
}
export default Logo;