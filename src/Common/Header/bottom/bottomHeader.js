import Logo from "./Logo";
import Navbar from "./Navbar";


const bottomHeader = () => {
    return(
        <div className="header-bottom py-3">
          <div className="container">
            <div className="row">
              <div className="col-3 d-flex align-items-center">
                  <Logo/>
              </div>
              <div className="col-9 d-flex justify-content-end">
                  <Navbar/>
              </div>
            </div>
          </div>
      </div>
    )
}
export default bottomHeader;