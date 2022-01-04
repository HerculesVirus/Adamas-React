// import {useState } from "react";
import CartItem from './CartItem';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setTotal } from '../../redux/Home/cart/cartActions';

const CartDropdown = (props) => {
 
  const [subTotal ,setSubTotal] = useState(0)
  console.log(props.cardList)
  const navigate = useNavigate()
  let sum=0;
  let dispatch = useDispatch()

  useEffect(()=>{
    if(props.cardList){
      for(let cartItem of props.cardList){
        //console.log('qty',typeof cartItem.Qty,'price', typeof cartItem.productInfo.price , 'total', sum)
        sum = sum + (parseInt(cartItem.Qty) * parseInt(cartItem.productInfo.price))
        // console.log('qty',cartItem.Qty,'price', cartItem.productInfo.price , 'total', sum)
      }
      setSubTotal(sum)
    }
  },[props.cardList])
  
  const handleDropDown = ()=> {
    props.show();
    //set subtotal to the redux state
    dispatch(setTotal(subTotal ? subTotal : 0))
    navigate('/PaymentCart')
  }
  const handleViewCart = ()=>{
    props.show()
    navigate('/CartList')
  }

  return (
        <div className="cart-dropdown">
          <div className="cart-items">
              <ul>
                {
                  props.cardList && props.cardList.length 
                    ?
                    <>
                      {(
                        props.cardList.map((item,index)=>{
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
            <Button className="pt-2 " onClick={()=>handleDropDown()}>
              TO CHECKOUT
            </Button>
          </div>
        </div>
      );
}

  export default CartDropdown;