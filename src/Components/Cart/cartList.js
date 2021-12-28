import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { fetchGetCart } from "../../redux/Home/cart/cartActions";

const CartList = () => {
    let dispatch = useDispatch()
    //const loading = useSelector(state => state.cart.loading)
    const Products = useSelector( state => state.cart.data)
    console.log(Products)
    const userID = useSelector(state => state.auth.user.user._id)
    console.log(userID)
    useEffect(()=>{
        dispatch(fetchGetCart(userID))

    },[dispatch,userID])
    return(
        <>
        <div>
            <ul>
                {Products && Products.map((item,index) => {
                    return(
                        <li key={index}>{item.Name + "        " + item.price}</li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default CartList;