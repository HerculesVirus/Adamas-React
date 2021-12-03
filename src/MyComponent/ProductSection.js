import Slider from "react-slick";
import ProductCard from "./LatestProductCard";
import { useState , useEffect } from "react";
import axios from "axios";
const ProductSection = () => {
    const [product,setProduct] = useState(null)
    useEffect(()=>{
      axios.get(`http://localhost:8000/api/admin/publicsite/product`)
      .then(res => setProduct(res.data))
    },[])
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return(
        <section className="product_section_bg">
        <div className="container ">
          <div className="row">
            <Slider {...settings}>
            {
                product && product.map( items => {
                    return(
                      <div className="col-lg-3 col-sm-6 " style={{width : '100%' }} key={items._id} >
                        <ProductCard 
                        p_img={items.img} 
                        p_title={items.Name} 
                        p_description={items.Description}
                        p_price = {items.price}
                        p_priceBtn= {"BUY NOW"}
                        p_categoryTitle= {"Categories"}/> 
                      </div>
                    )
                })
            }
            </Slider>
          </div>
        </div>  
      </section>
    )
}

export default ProductSection;