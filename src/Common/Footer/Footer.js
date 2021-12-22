
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import { Social } from "../../Data/SocialData";
const Footer = () => {
    return(
      <>
        <SocialMedia p_twitter={Social.p_start} p_icon={Social.p_end}/>
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
      </>
    ) 
}

export default Footer;