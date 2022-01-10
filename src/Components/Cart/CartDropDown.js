// import {useState } from "react";
import CartItem from './CartItem';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect} from 'react';
import { useSelector } from 'react-redux';


const CartDropdown = (props) => {
  //HOOK
  const NumberOfCarts = useSelector(state => state.cart?.data)
  const subTotal = useSelector(state => state.cart?.total)
  console.log(NumberOfCarts)
  //STATE
  const navigate = useNavigate()
  useEffect(()=>{
  })
  const handleDropDown = ()=> {
    props.show();
    navigate('/PaymentCart')
  }
  const handleViewCart = ()=>{
    props.show()
    navigate('/CartList')
  }
  return (
  <>
    <div className="cart-dropdown">
            <div className="cart-items">
                <ul>
                  {
                    NumberOfCarts && NumberOfCarts.length 
                      ?
                      <>
                        {(
                          NumberOfCarts.map((item,index)=>{
                            return(
                              <>
                                <CartItem i={index} >
                                  <ul className="d-flex list-unstyled justify-content-between carlistItem">
                                    <li>
                                      <div>
                                          <img className="cardlist-pic" src={`http://localhost:8000/public/img/Product/${item.productInfo.img}`} alt=""/>
                                      </div>
                                    </li>
                                    <li>{item.Qty}x{item.productInfo.Name}</li>
                                    <li className="px-3">${item.productInfo.price}</li>
                                  </ul>
                                </CartItem>
                              </> 
                            )
                          })
                        )}
                        <div style={{borderBottom : '1px dotted darkgray' , padding : "10px"}}>
                          <div className='d-flex list-unstyled justify-content-between'>
                            <span>Subtotal:</span>
                            <span  className="px-3">${subTotal}</span>
                          </div>
                        </div> 
                      </>
                      :
                      NumberOfCarts.length === 0 
                        ?
                        <>
                          <div className="d-flex list-unstyled justify-content-center carlistItem p-2">
                              <p>Your Cart is empty</p>
                          </div>
                          <div style={{borderBottom : '1px dotted darkgray' , padding : "10px"}}>
                            <div className='d-flex list-unstyled justify-content-between'>
                                  <span>Subtotal:</span>
                                  <span  className="px-3">${subTotal}</span>
                            </div>
                          </div>
                        </>
                        :
                        <> 
                          <div className="d-flex list-unstyled justify-content-center carlistItem p-2">
                            <Box sx={{ display: 'flex' }}>
                              <CircularProgress />
                            </Box>
                          </div>
                          <div style={{borderBottom : '1px dotted darkgray' , padding : "10px"}}>
                            <div className='d-flex list-unstyled justify-content-between'>
                                  <span>Subtotal:</span>
                                  <span  className="px-3">${0}</span>
                            </div>
                          </div>
                        </>
                  }
                </ul>
            </div>
            <div className="cart-button" style={{padding : "20px"}}>
              <Button onClick={()=> handleViewCart()}>
                View Carts
              </Button>
              <Button className="pt-2 " onClick={()=>handleDropDown()} disabled={subTotal === 0 ? true: false}>
                TO CHECKOUT
              </Button>
            </div>
    </div>
  </>
  );
}

export default CartDropdown;