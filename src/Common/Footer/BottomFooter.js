import { Link } from "react-router-dom";
const BottomFooter = () => {
    return(
        <>
            <div className="col-md-4 d-flex justify-content-center justify-content-md-start">
                <nav className="footer_nav">
                    <ul className="footer_nav_links d-flex list-unstyled">
                        <li className="px-1"><Link className="text-decoration-none text-light" to="#" >Home</Link></li>
                        <li className="px-1"><Link className="text-decoration-none text-light"to="#">Portfolio</Link></li>
                        <li className="px-1"><Link className="text-decoration-none text-light"to="#">Sitemap</Link></li>
                        <li className="px-1"><Link className="text-decoration-none text-light"to="#">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="col-md-8 d-flex justify-content-md-end justify-content-center">
                <p className="text-light">Adamas @ 2013 by PremiumCoding | All Rights Reserved</p>
            </div>
        </>
    )
}

export default BottomFooter;