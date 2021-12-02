import { Link } from "react-router-dom";
import Header from "../Common/Header/Header";

const ApperalNotFound = ()=>{
    return(
        <>
            <Header/>
            <div>
                <h1> 404 : Page Not Found</h1>
                <Link to='/'>Home</Link>
            </div>
        </>
    )
}

export default ApperalNotFound;
