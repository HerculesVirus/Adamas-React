
const CartItem = (props)=>{
    console.log(props.item)
    return(
        <>
            <li style={{borderBottom : '2px dotted darkgray'}}>
                <ul className="d-flex list-unstyled justify-content-between carlistItem pt-2">
                    <li>
                        <div>
                            <img className="cardlist-pic" src={`http://localhost:8000/public/img/Product/${props.item.img}`} alt=""/>
                        </div>
                    </li>
                    <li>{props.item.Name}</li>
                    <li className="px-3">{props.item.price}</li>
                </ul>
            </li>
        </>
    )
}

export default CartItem