
const CartItem = ({children ,i})=>{
    console.log(`index :${i}`)
    return(
        <>
            <li key={i} style={{borderBottom : '2px dotted darkgray'}}>
                {children}
            </li>
        </>
    )
}

export default CartItem