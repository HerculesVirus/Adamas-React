import {useState } from "react";
import CartItem from './CartItem';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CartDropdown = (props) => {
  
  console.log(props.cardList)
  const handleDropDown = ()=> {
    props.show();
  }
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
                      <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                      </Box>
                    </>
                }
              </ul>
          </div>
          <Button className="pt-2 " onClick={()=>handleDropDown()}>
            
            <Link className="checkout" to = "/PaymentCard" >GO TO CHECKOUT</Link>
          
          </Button>
        </div>
      );
}

  export default CartDropdown;