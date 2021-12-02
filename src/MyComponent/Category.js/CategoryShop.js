import { Link } from 'react-router-dom';
import '../../assets/style.css'

const CategoryShop = ()=> {
    return(
        <>
            <div class="breadcrumb-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9 col-12">
                            <h1 class="text-white">Shop with a Sidebar on left</h1>
                            <div style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item "><Link class="text-white" href="#">Home <i
                                                class="fa fa-angle-double-right fa-sm"></i></Link></li>
                                    <li class="breadcrumb-item text-white" aria-current="page">Shop with Sidebar</li>
                                </ol>
                            </div>
                        </div>
                        <div class="col-md-3 col-12 ">
                            <div class="row float-md-end float-sm-none">
                                <div class="col-md-2 col-12 float-end">
                                    <span class="mobile-font "><i class="fa fa-mobile fa-lg text-white"></i></span>
                                </div>
                                <div class="col-md-10 col-12 p-2">
                                    <h3 class="text-white mb-0">+565 975 658</h3>
                                    <p class="text-white mb-0 ps-3">Monday-Friday, 8:00-20:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-12">
                            <div class="Catagory-content">
                                <h3>Catagories</h3>
                                <ul class="catagories p-0">
                                    <li class="catagory-items"><Link href="#">Jewelry (5)</Link></li>
                                    <li class="catagory-items"><Link href="#">Apparel (3)</Link></li>
                                    <li class="catagory-items "><Link class="active" href="#">Rings (8)</Link></li>
                                    <li class="catagory-items"><Link href="#">Dresses & Jackets (12) </Link></li>
                                    <li class="catagory-items"><Link href="#">Necklaces (7)</Link></li>
                                    <li class="catagory-items"><Link href="#">Bags (15)</Link></li>

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
                                                <img src="/images/bluediamond_normal.jpg" class="card-img-top"
                                                    alt="image of ring"/>
                                            </div>
                                            <div class="card-body">
                                                <h6 class="card-title ps-3">Silver Ring with a Diamond</h6>
                                            </div>
                                        </div>
                                        <div class="card">

                                            <div> <img src="/images/bluediamond_normal.jpg" class="card-img-top"
                                                    alt="image of ring"/></div>
                                            <div class="card-body">
                                                <h6 class="card-title ps-3">Silver Ring with a Diamond</h6>
                                            </div>
                                        </div>
                                        <div class="card">

                                            <div> <img src="/images/bluediamond_normal.jpg" class="card-img-top"
                                                    alt="image of ring"/></div>
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
                                            <img src="images/bluediamond_short.jpg" class="img-fluid"
                                                alt="image of ring"/>
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
                                            <img src="images/redRing_short.jpg" class="img-fluid" alt="image of ring"/>
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
                        </div>
                        <div class="col-md-9 col-12">
                            <div class="row text-center">
                                <div class="col-md-4 mb-4">
                                    <div class="offers">
                                        <div><img src="images/ring.jpg" class="img-fluid" alt="image of ring"/></div>
                                        <h5 class="text-start border-dotted">Set of Weddings Rings</h5>
                                        <p id='paragraph'>Lorem ipsum dolor, sit amet cons adipisicing elit. Aspernatur
                                            rerum
                                            delectus </p>
                                        <div class="borders-end">
                                            <div class="row ">
                                                <div class="col-md-6 col-sm-12 col-12 p-0">
                                                    <strong>$59.89</strong>
                                                </div>
                                                <div class="col-md-6  col-sm-12 col-12 p-0">
                                                    <button>BUY NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6 col-12 col-sm-12  pe-4">
                                                <i class="fa fa-bars"> Catagory</i>
                                            </div>
                                            <div class="col-md-6 col-12 col-sm-12  pe-1">
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i
                                                            class="fa fa-star not-checked"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="offers">
                                        <div><img src="images/bluering.jpg" class="img-fluid" alt="image of ring"/></div>
                                        <h5 class="text-start border-dotted">Blue Sky Diamond</h5>
                                        <p id='paragraph'>Lorem ipsum dolor, sit amet cons adipisicing elit. Aspernatur
                                            rerum
                                            delectus </p>
                                        <div class="borders-end">
                                            <div class="row ">
                                                <div class="col-md-6 col-12 p-0">
                                                    <strong>$159.8</strong>
                                                </div>
                                                <div class="col-md-6 col-12 p-0">
                                                    <button>BUY NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6 col-12 pe-4">
                                                <i class="fa fa-bars"> Catagory</i>
                                            </div>
                                            <div class="col-md-6 col-12 pe-1">
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i
                                                            class="fa fa-star not-checked"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="offers">
                                        <div><img src="images/bag.jpg" class="img-fluid" alt="image of bag"/></div>
                                        <h5 class="text-start border-dotted">A black Leather Purse</h5>
                                        <p id='paragraph'>Lorem ipsum dolor, sit amet cons adipisicing elit. Aspernatur
                                            rerum
                                            delectus </p>
                                        <div class="borders-end">
                                            <div class="row ">
                                                <div class="col-md-6  col-12 p-0">
                                                    <strong>$24.89</strong>
                                                </div>
                                                <div class="col-md-6 col-12 p-0">
                                                    <button>BUY NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6 col-12 pe-4">
                                                <i class="fa fa-bars"> Catagory</i>
                                            </div>
                                            <div class="col-md-6 col-12 pe-1">
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i
                                                            class="fa fa-star not-checked"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-5">
                                    <div class="offers">
                                        <div><img src="images/ring.jpg" class="img-fluid" alt="image of ring"/></div>
                                        <h5 class="text-start border-dotted">Set of Weddings Rings</h5>
                                        <p id='paragraph'>Lorem ipsum dolor, sit amet cons adipisicing elit. Aspernatur
                                            rerum
                                            delectus </p>
                                        <div class="borders-end">
                                            <div class="row ">
                                                <div class="col-md-6 col-sm-12 col-12 p-0">
                                                    <strong>$59.89</strong>
                                                </div>
                                                <div class="col-md-6  col-sm-12 col-12 p-0">
                                                    <button>BUY NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6 col-12 col-sm-12  pe-4">
                                                <i class="fa fa-bars"> Catagory</i>
                                            </div>
                                            <div class="col-md-6 col-12 col-sm-12  pe-1">
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i
                                                            class="fa fa-star not-checked"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="offers">
                                        <div><img src="images/bluering.jpg" class="img-fluid" alt="image of ring"/></div>
                                        <h5 class="text-start border-dotted">Blue Sky Diamond</h5>
                                        <p id='paragraph'>Lorem ipsum dolor, sit amet cons adipisicing elit. Aspernatur
                                            rerum
                                            delectus </p>
                                        <div class="borders-end">
                                            <div class="row ">
                                                <div class="col-md-6 col-12 p-0">
                                                    <strong>$159.8</strong>
                                                </div>
                                                <div class="col-md-6 col-12 p-0">
                                                    <button>BUY NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6 col-12 pe-4">
                                                <i class="fa fa-bars"> Catagory</i>
                                            </div>
                                            <div class="col-md-6 col-12 pe-1">
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i
                                                            class="fa fa-star not-checked"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="offers">
                                        <div><img src="images/bag.jpg" class="img-fluid" alt="image of bag"/></div>
                                        <h5 class="text-start border-dotted">A black Leather Purse</h5>
                                        <p id='paragraph'>Lorem ipsum dolor, sit amet cons adipisicing elit. Aspernatur
                                            rerum
                                            delectus </p>
                                        <div class="borders-end">
                                            <div class="row ">
                                                <div class="col-md-6  col-12 p-0">
                                                    <strong>$24.89</strong>
                                                </div>
                                                <div class="col-md-6 col-12 p-0">
                                                    <button>BUY NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6 col-12 pe-4">
                                                <i class="fa fa-bars"> Catagory</i>
                                            </div>
                                            <div class="col-md-6 col-12 pe-1">
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                                                    </li>
                                                    <li class="list-inline-item me-0"><i
                                                            class="fa fa-star not-checked"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="pagination-content">
                                    <div aria-label="Page navigation example">
                                        <ul class="pagination justify-content-end">
                                            <li class="page-item border-end border-5 border-white">
                                                <Link class="page-link" href="#">Prev</Link>
                                            </li>
                                            <li class="page-item active border-end border-5 border-white"><Link
                                                    class="page-link" href="#">1</Link></li>
                                            <li class="page-item border-end border-5 border-white"><Link class="page-link"
                                                    href="#">2</Link></li>
                                            <li class="page-item border-end border-5 border-white"><Link class="page-link"
                                                    href="#">3</Link></li>
                                            <li class="page-item border-end border-5 border-white"><Link class="page-link"
                                                    href="#">4</Link></li>
                                            <li class="page-item ">
                                                <Link class="page-link" href="#">Next</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default CategoryShop;