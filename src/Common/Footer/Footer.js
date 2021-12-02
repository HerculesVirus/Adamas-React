
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";
const Footer = () => {
    return(
    <footer className="pt-5">
      <div className="container">
        <div className="row">
          <TopFooter/>
        </div>
      </div>
      <div className="footer_nav_bg py-1">
        <div className="container">
          <div className="row">
            <BottomFooter/>
          </div>
        </div>
      </div>
    </footer>   
    ) 
}

export default Footer;