
import CategoryCards from "./ProductCards";

const CardsGrid = (props)=> {
    console.log("Product : ")
    console.log(props.Products)
    return(
        <>
        <div className="row text-center">
            {props.Products && props.Products.data.map((item,index)=>{
                return(
                    <div className="col-md-4 mb-4" key={index}>
                        <CategoryCards values={item} />
                    </div>
                )
            })}
        </div>
      
        </>
    )
}

export default CardsGrid;