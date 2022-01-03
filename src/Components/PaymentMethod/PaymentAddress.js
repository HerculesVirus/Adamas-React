

const PaymentAddress = ()=>{
    return (
        <>
            <div className='payment-address'>
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
        </>
    )
                // {/* <Form onSubmit={(e)=>handleBillingAddress(e)} > */}
                //                 {/* <div className="billing-address">
                //                     <h3>Billing Address</h3>
                //                     // <Form.Group className="mb-3" controlId="formBillingFname">
                //                     //     <Form.Label><i className="fa fa-user"></i> Full Name</Form.Label>
                //                     //     <Form.Control type="text" name="fullname" placeholder="John M. Doe" onChange={(e)=> handleOnChange(e) }/>
                //                     //     {/* {err.fullname ? <div className='error'>this filed is required</div> : <><div></div></>} */}
                //                     {/* </Form.Group> */}

                //                     {/* // <Form.Group className="mb-3" controlId="formBillingEmail">
                //                     //     <Form.Label><i className="fa fa-envelope"></i> Email</Form.Label>
                //                     //     <Form.Control type="email" name="email" placeholder="john@example.com" onChange={(e)=> handleOnChange(e) }/>
                //                     //     {/* {err.email ? <div className='error'>this filed is required</div> : <></>} */}
                //                     // </Form.Group> */}

                //                     // <Form.Group className="mb-3" controlId="formBillingAddress">
                //                     //     <Form.Label><i className="fa fa-address-card-o"></i> Address</Form.Label>
                //                     //     <Form.Control type="text" name="address" placeholder="542 W. 15th Street" onChange={(e)=> handleOnChange(e) }/>
                //                     //     {/* {err.address ? <div className='error'>this filed is required</div> : <></>} */}
                //                     // </Form.Group>


                //                     // <Form.Group className="mb-3" controlId="formBillingCity">
                //                     //     <Form.Label><i className="fa fa-institution"></i> City</Form.Label>
                //                     //     <Form.Control type="text"   name="city" placeholder="New York"  onChange={(e)=> handleOnChange(e) }/>
                //                     //     {/* {err.city ? <div className='error'>this filed is required</div> : <></>} */}
                //                     // </Form.Group>                                

                //                     // <Form.Group className="mb-3" controlId="formBillingState">
                //                     //     <Form.Label><i className="fa fa-flag"></i> State</Form.Label>
                //                     //     <Form.Control type="text"  name="state" placeholder="NY"  onChange={(e)=> handleOnChange(e) }/>
                //                     //     {/* {err.state ? <div className='error'>this filed is required</div> : <></>} */}
                //                     // </Form.Group>   

                //                     // <Form.Group className="mb-3" controlId="formBillingZipCode">
                //                     //     <Form.Label><i className="fa fa-map-pin"></i> Zip</Form.Label>
                //                     //     <Form.Control type="text"  name="zip" placeholder="10001"  onChange={(e)=> handleOnChange(e) }/>
                //                     //     {/* {err.zip ? <div className='error'>this filed is required</div> : <></>} */}
                //                     // </Form.Group>  
                //                     // <Form.Group className="mb-3" controlId="formBasicCheckbox">
                //                     //     <Form.Check type="checkbox"  name="sameadr" label="Shipping address same as billing" />
                //                     // </Form.Group>
                //                 //</div> }
                //                 {/* <div className="butt">
                //                     <Button type="submit"> 
                //                         Continue to checkout
                //                     </Button>
                //                 </div>
                //             </Form> */}      
}

export default PaymentAddress