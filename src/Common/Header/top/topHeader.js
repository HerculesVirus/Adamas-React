


import Left from "./left";
import SignIn from "./SignIn";
const topHeader = () => {
    return(
        <div class="header-top">
            <div class="header-top-background">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-8 d-flex py-1 col-sm-12 justify-content-sm-start justify-content-xl-start">
                            <Left/>
                        </div>
                        <div class="col-lg-4 d-flex justify-content-lg-end justify-content-sm-start  py-1 col-sm-12">
                            <SignIn/>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default topHeader;