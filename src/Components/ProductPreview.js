import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Container,Row ,Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"

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
    


    return(
        <>
        {console.log(productData)}
            <div className="breadcrumb-content">
                <Container>
                    <Row>
                        <Col md="9 col-12">
                            <h1 className="text-white">Shop with a Sidebar on left</h1>
                            <div style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item ">
                                        <Link className="text-white" to="#">Home 
                                            <i className="fa fa-angle-double-right fa-sm"></i>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item text-white" aria-current="page">Shop with Sidebar</li>
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
                    <h4>{productData.Name}</h4>
                    <p dangerouslySetInnerHTML={{__html: productData.Description}}/>
                    {/* <p  dangerouslySetInnerHTML={{__html: description}}/> */}
                    <div>
                        <label>Qty:</label>
                        <input type="number" />
                        <p>{productData.price}</p> 
                        <button>ADD TO CART</button>
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