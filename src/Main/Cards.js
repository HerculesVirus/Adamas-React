

const Cards = (props) => {
    console.log("props.my_img : "+props.my_img)
    return(
        <div className="col-md-4">
            <div className="card" >
                <div className="product-img-container">
                    <img src={props.my_img} className="card-img-top product-img" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center pt-sans small-heading">{props.my_title}</h5>
                    <p className="card-text text-center pb-3">{props.my_des}</p>
                        <div className="d-flex justify-content-center">
                            <button className="product_button">{props.my_button}</button>
                        </div>  
                </div>
            </div>
        </div>

    )
}

export default Cards;

