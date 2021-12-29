import CartItem from './CartItem';
import { Button } from 'react-bootstrap';

const CartDropdown = (props) => {
    console.log(props.cardList)
    return (
        <div className="cart-dropdown">
          <div className="cart-items">
              <ul>
                {
                    props.cardList && props.cardList.length ? (
                        props.cardList.map((item,index)=>{
                            return(
                                <>
                                    <CartItem key={index} item={item}/>
                                </>
                            )
                        })
                    )
                    :
                    <> 
                        <li className="empty-message"> Your cart is empty</li>
                    </>
                }
              </ul>
            {/* {props.products  && props.products.length ? (
              props.products.map((item,index) => <CartItem key={index} item={item} />)
            ) : (
              <span className="empty-message"> Your cart is empty </span>
            )} */}
          </div>
          <Button>
            GO TO CHECKOUT
          </Button>
        </div>
      );
}

  export default CartDropdown;