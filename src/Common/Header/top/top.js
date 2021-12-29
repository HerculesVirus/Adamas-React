import Left from "./left";
import SignIn from "./SignIn";
const topHeader = () => {
    return(
        <div className="header-top">
            <div className="header-top-background">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 d-flex py-1 col-sm-12 justify-content-sm-start justify-content-xl-start">
                            <Left/>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-lg-end justify-content-sm-start  py-1 col-sm-12">
                            <SignIn/>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default topHeader;