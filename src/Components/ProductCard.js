
const ProductCard = (props) => {
    const capitalize  =(value) => {
        var textArray = value.split(' ')
        var capitalizedText = ''
        for (var i = 0; i < textArray.length; i++) {
          capitalizedText += textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1) + ' '
        }
        return capitalizedText
      }
    return(
            <>
            <div className="product m-2">
                <div className="product_img">
                    <img src={`http://localhost:8000/public/img/Product/${props.p_img}`} alt=""/>
                </div>
                <div className="product_heading">
                    <h3 className="pt-sans small-heading">{capitalize(props.p_title)}</h3>
                </div>
                <div className="product_para">
                    <p dangerouslySetInnerHTML={{__html: (props.p_description)}} />
                </div>
                <div className="product_price">
                    <h4 className="price">${props.p_price}</h4>
                    <button>{props.p_priceBtn}</button>
                </div>
                <div className="product_categories">
                    <h5><i className="fa fa-bars"></i>{props.p_categoryTitle}</h5>
                    <ul>
                        <li><i className="s1 fa fa-star"></i></li>
                        <li><i className="s2 fa fa-star"></i></li>
                        <li><i className="s3 fa fa-star"></i></li>
                        <li><i className="s4 fa fa-star"></i></li>
                        <li><i className="s5 fa fa-star"></i></li>
                    </ul>
                </div>
            </div>
            </>
        
    )
}

export default ProductCard;