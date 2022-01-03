import { Button } from "react-bootstrap";
import { useSelector ,useDispatch } from "react-redux";
import { useState , useEffect, useCallback} from "react";
import { deleteCart, getCart, updateCart } from "../../redux/Home/cart/cartActions";

const ViewCarts = ()=>{
    const cart = useSelector(state => state.cart?.data)
    const obj = useSelector(state => state.cart)

    console.log(obj)
    console.log("sdasdasdaadasdad",cart)
    return(
        <>

            <div className='container'>
                <div className="row">
                    <table>
                        {
                            console.log("qweqewfsdfewfsdfs",cart)
                            
                        }
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart !== undefined ? 
                            cart.map((cartItem, i)=>{
                                return <TableRow key={i} cartItem={cartItem}/>;
                            })
                            
                        
                        :<></>
                        }
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-center '>
                        <Button >Proceed to Check Out </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
const TableRow=({cartItem})=>{
    const userID = useSelector(state => state.user?.user._id )
    console.log(userID)

    let [qty, setQty] = useState(cartItem.Qty)
    const dispatch= useDispatch();
    
    // useEffect(()=>{
    //     console.log(qty)
    //     dispatch(updateCart(cartItem, qty))
    // },[qty])
    
    const handleChange=(e)=>{
        setQty(e.target.value)
    }
    
    const handleDelete=()=>{
        dispatch(deleteCart(cartItem))
    }

    return(
        <>
            <tr>
                <td><img src={`http://localhost:8000/public/img/Product/${cartItem.productInfo.img}`} style={{width:"100px"}} alt="" /></td>
                <td>{cartItem.productInfo.Name}</td>
                <td>{cartItem.productInfo.price}</td>
                <td><input  type="number" onChange={(e)=>handleChange(e)} min="1" value={qty} style={{width: "50px"}}/></td>
                <td><Button onClick={()=>handleDelete()}>Delete</Button></td>
            </tr>
        </>
    )
}



export default ViewCarts