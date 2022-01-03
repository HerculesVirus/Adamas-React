// import {useState } from "react";
import CartItem from './CartItem';
import { Button } from 'react-bootstrap';
import { useNavigate , Link} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useState , useEffect} from 'react';

const CartDropdown = (props) => {
 
  const [subTotal ,setSubTotal] = useState(0)
  console.log(props.cardList)
  const navigate = useNavigate()
  let sum=0;
  useEffect(()=>{
    if(props.cardList){
      for(let cartItem of props.cardList){
        console.log('qty',typeof cartItem.Qty,'price', typeof cartItem.productInfo.price , 'total', sum)
        sum = sum + (parseInt(cartItem.Qty) * parseInt(cartItem.productInfo.price))
        console.log('qty',cartItem.Qty,'price', cartItem.productInfo.price , 'total', sum)
      }
      setSubTotal(sum)
    }
  },[props.cardList])
  
  const handleDropDown = ()=> {
    props.show();
    navigate('/PaymentCard')
  }

  return (
        <div className="cart-dropdown">
          <div className="cart-items">
              <ul>
                {
                  props.cardList && props.cardList.length 
                    ? 
                    (
                      props.cardList.map((item,index)=>{
                          // sum = sum+ item.productInfo.price
                          return(
                          <CartItem i={index} >
                                      <ul className="d-flex list-unstyled justify-content-between carlistItem pt-2">
                                          <li>
                                              <div>
                                                  <img className="cardlist-pic" src={`http://localhost:8000/public/img/Product/${item.productInfo.img}`} alt=""/>
                                              </div>
                                          </li>
                                          <li>{item.Qty}x{item.productInfo.Name}</li>
                                          <li className="px-3">${item.productInfo.price}</li>
                                      </ul>
                          </CartItem> )
                        })
                    )
                    :
                    <> 
                      <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                      </Box>
                    </>
                }
                  <div style={{borderBottom : '2px dotted darkgray'}}>
                    <div className='d-flex list-unstyled justify-content-between'>
                          <span>Subtotal:</span>
                          <span>${subTotal}</span>
                    </div>
                  </div>
              </ul>
          </div>
          <div>
            <Link type='button' onClick={()=> props.show()} className="pt-2" to="/CartList" >
              View Carts
            </Link>
            <Button className="pt-2 " onClick={()=>handleDropDown()}>
              TO CHECKOUT
            </Button>
          </div>
        </div>
      );
}

  export default CartDropdown;