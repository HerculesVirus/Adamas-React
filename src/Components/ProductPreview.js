import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPreview = ()=>{
    let {id}= useParams();
    console.log("Hello from ProductPreview")
    console.log(id)
    let [productData, setProductData]= useState(null)

    const getProduct=async()=>{
        await axios(`http://localhost:8000/api/product/${id}`)
            .then((res)=>{
                console.log(res.data)
                setProductData(res.data)
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        getProduct()
    })

    return(
        <div className="container">
          {productData &&  <div className="row">
                <div className="col-8">
                    <div className="img-container d-flex justify-content-center">
                       { productData.img &&  <img src={`http://localhost:8000/${productData.img}`} alt={productData.name} />}
                    </div>
                </div>
                <div className="col-4">
                    <h4>{productData.name}</h4>
                    {/* <p  dangerouslySetInnerHTML={{__html: description}}/> */}
                    <div>
                        <label>Qty:</label>
                        <input type="number" />
                        <p>{productData.price}</p> 
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>}
        </div>
    )
    
}

export default ProductPreview;