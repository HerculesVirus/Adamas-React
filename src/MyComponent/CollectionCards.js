
import { Link } from "react-router-dom"
const Cards = (props) => {
    const capitalize  =(value) => {
        var textArray = value.split(' ')
        var capitalizedText = ''
        for (var i = 0; i < textArray.length; i++) {
          capitalizedText += textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1) + ' '
        }
        return capitalizedText
      }
    return(
        <div className="card" style={{margin : "6px"}} >
            <div className="product-img-container">
                <img src={`http://localhost:8000/public/img/Category/${props.my_img}`} className="card-img-top product-img" alt="..."/>
            </div>
            <div className="card-body">
                <h5 className="card-title text-center pt-sans small-heading">{capitalize(props.my_title)}</h5>
                <p className="card-text text-center pb-3" dangerouslySetInnerHTML={{__html: (props.my_des)}}/>
                    <div className="d-flex justify-content-center">
                        <Link to='/categoryShop'>
                            <button className="product_button">VISIT THE STORE</button>
                        </Link>
                    </div>  
            </div>
        </div>

    )
}

export default Cards;

