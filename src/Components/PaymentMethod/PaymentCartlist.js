
import {Link} from 'react-router-dom';
//Tempraray just for Component practise where to use or where not



const PaymentCartlist =()=>{
    return (
        <>
        <div className="checkout-container">
            <h4>Cart <span className="price" style={{ color: "black" }}><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
            <p><Link to="#">Product 1</Link> <span className="price">$15</span></p>
            <p><Link to="#">Product 2</Link> <span className="price">$5</span></p>
            <p><Link to="#">Product 3</Link> <span className="price">$8</span></p>
            <p><Link to="#">Product 4</Link> <span className="price">$2</span></p>
            <hr />
            <p>Total <span className="price" style={{ color: "black" }}><b>$30</b></span></p>
        </div>
        </>
    )
}

export default PaymentCartlist