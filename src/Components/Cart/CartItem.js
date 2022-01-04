
const CartItem = ({children ,i})=>{
    // console.log(`index :${i}`)
    return(
        <>
            <li key={i} style={{borderBottom : '1px dotted darkgray' , padding : "10px"}}>
                {children}
            </li>
        </>
    )
}

export default CartItem