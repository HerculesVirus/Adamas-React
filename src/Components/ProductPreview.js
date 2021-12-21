import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Container,Row ,Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import "./ProductPreview.css"
const ProductPreview = ()=>{
    let {id}= useParams();
    console.log("Hello from ProductPreview")
    console.log(id)
    let [productData, setProductData]= useState(null)
    
    useEffect(() => {
        axios(`http://localhost:8000/api/publicsite/ProductPreview/${id}`)
            .then((res)=>{
                console.log(res.data)
                setProductData(res.data)
            })
            .catch(err => console.log(err)) 
    },[id])
    

    let dropdownItems = [
        <DropdownItem key="1">Extra Small</DropdownItem>,
        <DropdownItem key="2">Option 2</DropdownItem>
      ];
    return(
        <>
        {console.log(productData)}
            <div className="breadcrumb-content">
                <Container>
                    <Row>
                        <Col md="9 col-12">
                            <h1 className="text-white">{productData && productData.Name}</h1>
                            <div style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item ">
                                        <Link className="text-white" to="#">Home 
                                            <i className="fa fa-angle-double-right fa-sm"></i>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item text-white" aria-current="page">Shop</li>
                                </ol>
                            </div>
                        </Col>
                        <div className="col-md-3 col-12 ">
                            <div className="row float-md-end float-sm-none">
                                <div className="col-md-2 col-12 float-end">
                                    <span className="mobile-font "><i className="fa fa-mobile fa-lg text-white"></i></span>
                                </div>
                                <div className="col-md-10 col-12 p-2">
                                    <h3 className="text-white mb-0">+565 975 658</h3>
                                    <p className="text-white mb-0 ps-3">Monday-Friday, 8:00-20:00</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>

            </div>
        <Container>
          {productData &&  
            <div className="row">
                {console.log(productData.Name)}
                <div className="col-8">
                    <div className="img-container d-flex justify-content-center">
                       { productData.img &&  <img src={`http://localhost:8000/public/img/Product/${productData.img}`} alt={productData.name} />}
                    </div>
                </div>
                <div className="col-4">
                    <div className="Main mb-2" style={{borderBottom : '2px dotted darkgray'}}>
                        <h4>{productData.Name}</h4>
                        <div>               
                            <ul className="d-flex justify-content-start align-item-center p-0"> 
                                <li><i className="s1 fa fa-star"></i></li>
                                <li><i className="s2 fa fa-star"></i></li>
                                <li><i className="s3 fa fa-star"></i></li>
                                <li><i className="s4 fa fa-star"></i></li>
                                <li><i className="s5 fa fa-star"></i></li>
                                <div className="rating px-2">12 Reviews</div>
                                <div className="review">Add your view</div>
                            </ul>   
                        </div>
                    </div>
                    <div className="description mb-2" style={{borderBottom : '2px dotted darkgray'}}>
                        <p dangerouslySetInnerHTML={{__html: productData.Description}}/>
                    </div>
                    <div className="colorSize "style={{borderBottom : '2px dotted darkgray'}}>
                        <ul className="d-flex justify-content-start align-item-center p-0">
                            <label>Color: </label> 
                                <li><i className="s1 fa fa-star"></i></li>
                                <li><i className="s2 fa fa-star"></i></li>
                                <li><i className="s3 fa fa-star"></i></li>
                                <li><i className="s4 fa fa-star"></i></li>
                                <li><i className="s5 fa fa-star"></i></li>
                        </ul>
                        <div className="d-flex mb-2">     
                            <label>Size: </label>     
                            <Dropdown label="Select Size" size="small">
                                {dropdownItems}
                            </Dropdown>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start align-item-center pt-0">
                        <label className="align-self-center">Qty: </label>
                        {/* <button className="inline-flex" dangerouslySetInnerHTML={{__html :"<"}}/> */}
                        <div className="align-self-center px-4" >
                            <input  type="number" style={{width : '45px'}}/>
                        </div>
                        {/* <button className="" dangerouslySetInnerHTML={{__html :">"}}/> */}
                        <p className="align-self-center price px-2 mb-0" >{`$`}{productData.price}</p>
                        <button className="Cart">ADD TO CART</button>
                    </div>
                </div>
            </div>}
        </Container>
        <Container>
            <Row>
                <Col>
                    <Button>
                        DESCRIPTION
                    </Button>
                    <Button>
                        ADDITIONAL INFORMATION
                    </Button>   
                    <Button>
                        Reviews
                    </Button>                 
                </Col>
            </Row>
        </Container>
        </>
    )
    
}

export default ProductPreview;