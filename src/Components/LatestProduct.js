
const LatestProduct = (props) => {
   return(
        <section className="latest_products">
            <div className="container">
                <div>
                    <h3 className="dispay-5 text-center pt-sans latest_products_heading">
                        <span className="border-style">{props.title}</span> 
                    </h3>
                    <p className="text-center pt-3">
                        {props.p_start}<span>{props.p_span}</span>{props.p_end}.
                    </p>
                </div>
            </div>
        </section>
   ) 
}
export default LatestProduct;