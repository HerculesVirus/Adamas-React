import Banner from "./Banner/Banner";
import Collection  from "./Collection/Collection";
import LatestProduct from "./LatestProduct/LatestProduct";
import FeaturedProductSection from "./Product/FeaturedProductSection";
import { LatestOne } from "../Data/LatestData";
import { LatestTwo } from "../Data/LatestData";
import LatestProductSection from "./Product/LatestProductSection";

const Main = () => {
 
    return(
        <>
            <Banner/>
            <Collection/>
            <LatestProduct title={LatestOne.title} p_start={LatestOne.p_start} p_span={LatestOne.p_span} p_end ={LatestOne.p_end}/>
            <LatestProductSection/>
            {/* <ProductSection/> */}
            <LatestProduct title={LatestTwo.title} p_start={LatestTwo.p_start} p_span={LatestTwo.p_span} p_end ={LatestTwo.p_end}/>
            <FeaturedProductSection/>
        </>

    )
}

export default Main;