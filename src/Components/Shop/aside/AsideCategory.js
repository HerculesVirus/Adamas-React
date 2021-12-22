import Button from "@restart/ui/esm/Button";
import { useDispatch } from "react-redux";
import { fetchCategoryShop } from "../../../redux/Home/Shop/ShopAction";
import Listitem from "./Listitem";

const AsideCategory = (props)=>{
    const dispatch = useDispatch()
    
    const allProduct = ()=>{
        dispatch(fetchCategoryShop(null , props.page))
        // props.Decision(false)
    }
    return(
        <>
            <div className="Catagory-content">
                <h3>Catagories</h3>
                <ul className="catagories p-0">
                    <li className="catagory-items"><Button onClick={() => allProduct()}>All</Button></li>
                    {props.Categories && props.Categories.map((items,index)=>{
                        return(
                            <Listitem value={items} key={index} currentPage={props.page}/>
                        )
                    })}
                </ul>
            </div>
            <div className="card-content">
                <div className="row">
                    <div className="col-md-6 col-12 ">
                        <h5>Best Sellers</h5>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="float-end">
                            <span className="previous"><i className="fa fa-angle-left"></i></span>
                            <span className="next"><i className="fa fa-angle-right"></i></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="slicker-item">
                        <div className="card">
                            <div> 
                                <img src="../../../public/images/3.1.png" className="card-img-top"
                                    alt={"of ring"}/>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title ps-3">Silver Ring with a Diamond</h6>
                            </div>
                        </div>
                        <div className="card">

                            <div> <img src="../../../public/images/3.2.png" className="card-img-top"
                                    alt="of ring"/></div>
                            <div className="card-body">
                                <h6 className="card-title ps-3">Silver Ring with a Diamond</h6>
                            </div>
                        </div>
                        <div className="card">

                            <div> <img src="../../../public/images/3.4.png" className="card-img-top"
                                    alt="of ring"/></div>
                            <div className="card-body">
                                <h6 className="card-title ps-3">Silver Ring with a Diamond</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="price-content">
                <h5>Price Range</h5>
                <ul className="p-0">
                    <li>
                        <h6>$5.00 - $50.00</h6>
                    </li>
                    <li>
                        <h6>$50.00 - $100.00</h6>
                    </li>
                    <li>
                        <h6>$100.00 - $200.00</h6>
                    </li>
                    <li>
                        <h6>$200.00 - $500.00</h6>
                    </li>
                </ul>
            </div>
            <div className="Recent-product-content">
                <div className="row">
                    <h4>Recent Products</h4>
                </div>
                <div className="row pt-3">
                    <div className="col-5">
                        <div className="image-resize">
                            <img src="../../../public/images/f.1.png" className="img-fluid"
                                alt="of ring"/>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="list-inline-item">
                            <h6>Blue Sky Diamond</h6>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star not-checked"></span>
                            <span className="price-hover">$546.78</span>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-5">
                        <div className="image-resize">
                            <img src="../../../public/images/f.2.png" className="img-fluid" alt="of ring"/>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="list-inline-item">
                            <h6>Flery Red Ring</h6>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star not-checked"></span>
                            <span className="price-hover">$2789.78</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AsideCategory;