import '../../assets/css/contact.css'

const Contact=()=>{
    return(
        <>
        <section class="drop-us-note bg-color">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <h2 class="font-family-myriad text-light">Drop us a Note</h2>
                        <nav aria-label="breadcrumb"></nav>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active text-light" aria-current="page">Home</li>
                                <span class="fal fa-angle-double-right arrow-icon text-light"></span>
                                <li class="breadcrumb-item  text-light" aria-current="page">Contact</li>
                            </ol>  
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 ms-auto ">
                        <div class="phone-detail d-flex justify-content-center float-end align-items-center">
                            <div class="mobile-icon">
                                <span class="fas fa-mobile-alt"></span>
                            </div>
                            <div class="mobile-number">
                                <p class="font-family-myriad text-light">+565 975 658</p>
                                <span class="font-family-myriad text-light">Monday - Friday, 8.00 - 20.00</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>    
        </section>

        <section class="map-img-section">
            <div class="map-img">
                <img src="./assets/images/map.png" alt="map"/>
            </div>
        </section>
        

        <section class="contact-form-section">
            <div class="container">
                <div class="contact-form">
                    <div class="row gx-5">
                        <div class="col-lg-8">
                            <form action="">
                                <div class="form-group">
                                    <label for="name">Your Name <span class="required">(required)</span></label>
                                    <input type="text" class="form-control" placeholder="Name"/>
                                </div>
                                <div class="form-group">
                                    <label for="name">Your Eamil <span class="required">(required)</span></label>
                                    <input type="text" class="form-control" placeholder="Email"/>
                                </div>
                                <div class="form-group">
                                    <label for="name">Your Webisite </label>
                                    <input type="text" class="form-control" placeholder="Phone"/>
                                </div>
                                <div class="form-group">
                                    <label for="name">Your Message <span class="required">(required)</span></label>
                                    <textarea name="" id="message" cols="30" rows="5" class="form-control"
                                        placeholder="Message"></textarea>
                                </div>
                                <div class="form-group float-end send-btns">
                                    <button type="button" class="btn bg-color text-light text-uppercase">Clear
                                        Message</button>
                                    <button type="button" class="btn bg-color text-light text-uppercase">Send
                                        Message</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-4">
                            <div class="contact-detial">
                                <h2 class="font-family-myriad">Little about our Company</h2>
                                <div class="company-description">
                                    <p class="font-family-myriad">Lorem ipsum <b>dolor sit amet,</b> consecteter vet
                                        adipiscing elit , sed diam nonummy nibh ase
                                        euin mod tincidunt ut laoreet dolore mati
                                        magna aliquam <span class="text-color1"> erat volutpat.</span> Iam nonunum
                                        mmy nibh euin mod tincidunt ut laoreet.
                                        Lorem ipsum <b>dolor sit amet,</b> consecteter vet
                                        adipiscing elit , sed diam nonummy nibh ase
                                        euin mod tincidunt ut laoreet dolore mati
                                        magna aliquam <span class="text-color1"> erat volutpat.</span> Iam nonunum
                                        mmy nibh euin mod tincidunt ut laoreet.</p>
                                </div>
                                <div class="social-address">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-1 col-sm-1">
                                            <ul class="address">
                                                <li><i class="fas fa-map-marker-alt"></i></li>
                                                <li><i class="fas fa-envelope"></i></li>
                                                <li><i class="fas fa-mobile-alt"></i></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-10 col-md-11 col-sm-11 address-detail">
                                            <p class="font-family-myriad"><b>Address</b>:Celovska cesta 1, Ljubljana</p>                                               
                                            <p class="font-family-myriad"><b>Email</b>:info@premiumcoding.com</p>
                                            <p class="font-family-myriad"><b>Phone Number</b>:+r456 789 854</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;