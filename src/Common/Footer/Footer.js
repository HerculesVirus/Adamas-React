
const Footer = () => {
    return(
    <footer class="pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6 pb-3">
            <div class="footer_logo_container">
              <div class="footer_logo">
                <strong class="logo d-inline-block">
                  <a href="index.html" class="d-inline-block">
                      <img src="images\logo_footer.png" alt="logo img"/>
                  </a>
                </strong>
              </div>
              <div>
                  <p>
                      Lorem ipsum dolor sit amet, consec
                      tetuer adipiscing elit, sed diam non
                      ummy nibh euismod tincidunt ut lao
                      reet dolore magna aliquam erat 
                      volutpat.
                  </p>
              </div>
          </div>
          </div>
          <div class="col-lg-3 col-sm-6 pb-3">
            <div class="recent_products">
              <h3 class="footer_heading pt-sans small-heading">Recent Products</h3>
              <div class="upper_product">
                  <div class="product_img_container">
                      <img class="footer_product_img" src="Images\f.1.png" alt=""/>
                  </div>
                  <div class="product_description">
                      <h5 class="pt-sans small-heading">Blue Sky Diamond</h5>
                      <div class="rating d-flex justify-content-start">
                          <ul>
                              <li><i class="s1 fas fa-star"></i></li>
                              <li><i class="s2 fas fa-star"></i></li>
                              <li><i class="s3 fas fa-star"></i></li>
                              <li><i class="s4 fas fa-star"></i></li>
                              <li><i class="s5 fas fa-star"></i></li>
                          </ul>
                      </div>
                      <p class="price">$589.99</p>
                  </div>
              </div>
              <div class="bottom_product">
                  <div class="product_img_container">
                      <img class="footer_product_img" src="Images\f.2.png" alt=""/>
                  </div>
                  <div class="product_description">
                      <h5 class="pt-sans small-heading">Blue Sky Diamond</h5>
                      <div class="rating">
                          <ul>
                              <li><i class="s1 fas fa-star"></i></li>
                              <li><i class="s2 fas fa-star"></i></li>
                              <li><i class="s3 fas fa-star"></i></li>
                              <li><i class="s4 fas fa-star"></i></li>
                              <li><i class="s5 fas fa-star"></i></li>
                          </ul>
                      </div>
                      <p class="price">$589.99</p>
                  </div>
              </div>
          </div>
          </div>
          <div class="col-lg-3 col-sm-6 pb-3">
            <div class="contacts">
              <h3 class="footer_heading pt-sans small-heading">Contacts</h3>
              <div class="address_container">
                  <address>
                      Adamas d.o.o., 1000 Ljubljana
                      Celovska cesta 135
                      Slovenia, Europe
                  </address>
              </div>
              <div class="numbers_container">
                  <dl>
                      <a href="#" class="list-unstyled text-decoration-none text-dark">Phone: (+386) 40 123 456</a> 
                  </dl>
                  <dl>
                      <a href="#"class="list-unstyled text-decoration-none text-dark">Mobile: (+386) 40 654 123 651</a> 
                  </dl>
              </div>

              <div class="email">
                  <p>Email: <span>info@premiumcoding.com</span></p>
              </div>

          </div>
          </div>
          <div class="col-lg-3 col-sm-6 pb-3">
            <div class="newsletter">
              <h3 class="footer_heading pt-sans small-heading">Sign to Newsletter</h3>
              <div class="input_name_container">
                  <input class="input_style" type="text" name="name" id="name" placeholder="Name"/>
              </div>
              <div class="input_email_container">
                  <input class="input_style" type="text" name="name" id="email" placeholder="Email"/>
              </div>
              <div class="button_container">
                  <button class="subscribe">Subscribe</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="footer_nav_bg py-1">
        <div class="container">
          <div class="row">
            <div class="col-md-4 d-flex justify-content-center justify-content-md-start">
              <nav class="footer_nav">
                <ul class="footer_nav_links d-flex list-unstyled">
                  <li class="px-1"><a class="text-decoration-none text-light" href="#" >Home</a></li>
                  <li class="px-1"><a class="text-decoration-none text-light"href="#">Portfolio</a></li>
                  <li class="px-1"><a class="text-decoration-none text-light"href="#">Sitemap</a></li>
                  <li class="px-1"><a class="text-decoration-none text-light"href="#">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div class="col-md-8 d-flex justify-content-md-end justify-content-center">
              <p class="text-light">Adamas @ 2013 by PremiumCoding | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>   
    ) 
}

export default Footer;