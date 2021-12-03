import Button from "@restart/ui/esm/Button";
import Listitem from "./Listitem";

const AsideCategory = (props)=>{
    const allProduct = ()=>{
        props.Decision(false)
    }
    return(
        <>
            <div class="Catagory-content">
                <h3>Catagories</h3>
                <ul class="catagories p-0">
                    <li class="catagory-items"><Button onClick={() => allProduct()}>All</Button></li>
                    {props.Categories && props.Categories.map((items,index)=>{
                        return(
                            <Listitem value={items} key={index} fun={props.ClickedCatName}/>
                        )
                    })}
                </ul>
            </div>
            <div class="card-content">
                <div class="row">
                    <div class="col-md-6 col-12 ">
                        <h5>Best Sellers</h5>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="float-end">
                            <span class="previous"><i class="fa fa-angle-left"></i></span>
                            <span class="next"><i class="fa fa-angle-right"></i></span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="slicker-item">
                        <div class="card">
                            <div> 
                                <img src="../../../public/images/3.1.png" class="card-img-top"
                                    alt={"of ring"}/>
                            </div>
                            <div class="card-body">
                                <h6 class="card-title ps-3">Silver Ring with a Diamond</h6>
                            </div>
                        </div>
                        <div class="card">

                            <div> <img src="../../../public/images/3.2.png" class="card-img-top"
                                    alt="of ring"/></div>
                            <div class="card-body">
                                <h6 class="card-title ps-3">Silver Ring with a Diamond</h6>
                            </div>
                        </div>
                        <div class="card">

                            <div> <img src="../../../public/images/3.4.png" class="card-img-top"
                                    alt="of ring"/></div>
                            <div class="card-body">
                                <h6 class="card-title ps-3">Silver Ring with a Diamond</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="price-content">
                <h5>Price Range</h5>
                <ul class="p-0">
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
            <div class="Recent-product-content">
                <div class="row">
                    <h4>Recent Products</h4>
                </div>
                <div class="row pt-3">
                    <div class="col-5">
                        <div class="image-resize">
                            <img src="../../../public/images/f.1.png" class="img-fluid"
                                alt="of ring"/>
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="list-inline-item">
                            <h6>Blue Sky Diamond</h6>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star not-checked"></span>
                            <span class="price-hover">$546.78</span>
                        </div>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-5">
                        <div class="image-resize">
                            <img src="../../../public/images/f.2.png" class="img-fluid" alt="of ring"/>
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="list-inline-item">
                            <h6>Flery Red Ring</h6>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star not-checked"></span>
                            <span class="price-hover">$2789.78</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AsideCategory;