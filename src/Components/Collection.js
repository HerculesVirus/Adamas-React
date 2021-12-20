import Cards from './CollectionCards'
import Slider from "react-slick";
import { useEffect } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollection } from '../redux/Home/Category/CollectionActions';
import MUI_BACKDROP from './MUI_BackDrop'


const Collection = (props) => {

  // const [collection , setCollection] = useState(null)
    let dispatch = useDispatch()

    const selector = useSelector(state => state.collection)
    // console.log(`Collection Component`)
    // console.log(selector)

    useEffect(()=>{
      dispatch(fetchCollection())
    },[dispatch])

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
        <section className="collection py-5">
        <div className="container">
          <div className="row">
            {
              selector.loading  || null ?
              <>  
                <MUI_BACKDROP loading = {selector.loading}/>
              </>
              :
              <>
                <Slider {...settings}>
                {
                  selector?.data &&  selector.data.map( (item)=> {
                  //console.log(item)
                    return(
                      <div className="col-md-4" key={item._id}>
                        <Cards 
                          my_img={item.img} 
                          my_title={item.Name} 
                          my_des={item.Description} 
                        />
                      </div>
                    )
                  })
                }
                </Slider>
              </>
            }
          </div>
        </div>
      </section>
    )
}
export default Collection ;