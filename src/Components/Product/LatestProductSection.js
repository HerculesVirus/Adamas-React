//Not Connected with the ProductSection
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { latestProduct } from "../../redux/Home/Product/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import MUI_BACKDROP from "../MUI/BackDrop";

const LatestProductSection = () => {
  
    const dispatch = useDispatch()
    const selector = useSelector(state => state.product)

    // console.log(`Product Component`)
    console.log(selector)
    console.log(selector.latestData)
    
    useEffect(()=>{
      dispatch(latestProduct())
    },[dispatch])
    
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
            {              
            selector.loading  || null ?
              <>  
                <MUI_BACKDROP loading = {selector.loading}/>
              </>
              :
              <Slider {...settings}>
              {
                  selector?.latestData && selector.latestData.map( items => {
                      return(
                        <div className="col-lg-3 col-sm-6 " key={items._id} >
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
            }

          </div>
        </div>  
      </section>
    )
}

export default LatestProductSection;