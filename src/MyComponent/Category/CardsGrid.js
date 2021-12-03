import { Link } from "react-router-dom";
import CategoryCards from "./CategoryCards";

const CardsGrid = (props)=> {
    console.log(props.Products)
    return(
        <>
        <div class="row text-center">
            {props.Products && props.Products.map((item,index)=>{
                return(
                    <div class="col-md-4 mb-4" key={index}>
                        <CategoryCards values={item} />
                    </div>
                )
            })}
        </div>
        <div class="row">
                <div class="pagination-content">
                    <div aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                            <li class="page-item border-end border-5 border-white">
                                <Link class="page-link" to="#">Prev</Link>
                            </li>
                            <li class="page-item active border-end border-5 border-white"><Link
                                    class="page-link" to="#">1</Link></li>
                            <li class="page-item border-end border-5 border-white"><Link class="page-link"
                                    to="#">2</Link></li>
                            <li class="page-item border-end border-5 border-white"><Link class="page-link"
                                    to="#">3</Link></li>
                            <li class="page-item border-end border-5 border-white"><Link class="page-link"
                                    to="#">4</Link></li>
                            <li class="page-item ">
                                <Link class="page-link" to="#">Next</Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>        
        </>
    )
}

export default CardsGrid;