import {Link} from 'react-router-dom';
import '../../assets/css/check.css';
import { Col ,Container , Row ,Form } from 'react-bootstrap';


const PaymentCard =()=> {
    return (
        <div className="checkout-form mt-4">
            <Container>
                <Row>
                    <Col md={9} className='left-container'>
                        {/* <div className="checkout-container"> */}
                            <Form >
                                <div className="checkout-container">
                                    <div className="form-address">
                                        <h3>Billing Address</h3>
                                        <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                        <label for="email"><i className="fa fa-envelope"></i> Email</label>
                                        <input type="text" id="email" name="email" placeholder="john@example.com" />
                                        <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                        <label for="city"><i className="fa fa-institution"></i> City</label>
                                        <input type="text" id="city" name="city" placeholder="New York" />
                                        <label for="state">State</label>
                                        <input type="text" id="state" name="state" placeholder="NY" />
                                        <label for="zip">Zip</label>
                                        <input type="text" id="zip" name="zip" placeholder="10001" />
                                    </div>
                                    <div className='billing-address'>
                                        <h3>Payment</h3>
                                        <label for="fname">Accepted Cards</label>
                                        <div className="icon-container">
                                            <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                                            <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                                            <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                                            <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
                                        </div>
                                        <label for="cname">Name on Card</label>
                                        <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                        <label for="ccnum">Credit card number</label>
                                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                        <label for="expmonth">Exp Month</label>
                                        <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                                        <label for="expyear">Exp Year</label>
                                        <input type="text" id="expyear" name="expyear" placeholder="2018" />
                                        <label for="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="352" />
                                        

                                    </div>
                                </div>
                                <div>
                                        <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                                        <div className="butt">
                                            <input type="submit" value="Continue to checkout" className="btn" />
                                        </div>
                                </div>
                            </Form>
                        {/* </div> */}
                    </Col>
                    <Col md={3}>
                        <div className="checkout-container">
                            <h4>Cart <span className="price" style={{ color: "black" }}><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
                            <p><Link to="#">Product 1</Link> <span className="price">$15</span></p>
                            <p><Link to="#">Product 2</Link> <span className="price">$5</span></p>
                            <p><Link to="#">Product 3</Link> <span className="price">$8</span></p>
                            <p><Link to="#">Product 4</Link> <span className="price">$2</span></p>
                            <hr />
                            <p>Total <span className="price" style={{ color: "black" }}><b>$30</b></span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default PaymentCard;