
const BillingAddress = ()=>{
    return (
        <>
            <div className="billing-address">
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
        </>
    )
}

export default BillingAddress;