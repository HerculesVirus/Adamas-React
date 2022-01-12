import { Button } from "react-bootstrap";
import { useSelector ,useDispatch } from "react-redux";
import { useEffect, useState  } from "react";
import { deleteCart, getCart, updateCart } from "../../redux/Home/cart/cartActions";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const ViewCarts = ()=>{
    let navigate = useNavigate()
    const cart = useSelector(state => state.cart?.data)
    console.log("cartArray : ",cart)
    const userID = useSelector(state => state.auth?.user?._id )
    console.log(`userID : ${userID}`)

    const total = useSelector (state => state.cart.total)
    console.log(`total in viewCarts : ${total}`)

    let dispatch = useDispatch()
    useEffect(()=>{
        if(userID){
            dispatch(getCart(userID))
        } 
    },[dispatch,userID])
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
                                return <TableRow key={i} cartItem={cartItem} user={userID}/>;
                            })
                        :<></>
                        }
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-center '>
                        <Button onClick={()=> navigate('/PaymentCart')} disabled={parseInt(total) === 0 ? true: false}>Proceed to Check Out ${total ? total : 0} </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
const TableRow=({cartItem,user})=>{
    console.log(`cartItem._id : ${cartItem._id}`)
    let [qty, setQty] = useState(cartItem.Qty)
    const dispatch= useDispatch();
    
    useEffect(()=>{
        // console.log(qty)
        // console.log(`your are in update quantity mode`)
        dispatch(updateCart(cartItem._id, qty ,user))
    },[qty])

    const handleOnBlur=(e)=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Qty is Updated",
            showConfirmButton: false,
            timer: 1500
        })
        setQty(e.target.value)
    }
    const handleDelete=()=>{
        const callback =(data)=>{
            // console.log("callback of ViewCart")
            // console.log(data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Deleted Sucessfully ",
                showConfirmButton: false,
                timer: 1500
            })

        }
        dispatch(deleteCart(cartItem,callback))
    }

    return(
        <>
            <tr>
                <td><img src={`http://localhost:8000/public/img/Product/${cartItem.productInfo.img}`} style={{width:"100px"}} alt="" /></td>
                <td>{cartItem.productInfo.Name}</td>
                <td>{cartItem.productInfo.price}</td>
                <td><input  type="number" onBlur={(e)=>handleOnBlur(e)}  min="1" defaultValue={qty} style={{width: "50px"}}/></td>
                <td>
                    <div className="d-flex viewCart-button-section">
                        
                        <Button onClick={()=>handleDelete()}variant="danger"><i className="fa fa-trash"></i></Button>
                    </div>
                </td>
           
            </tr>
        </>
    )
}



export default ViewCarts