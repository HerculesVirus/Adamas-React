import Header from "../Common/Header/Header";
import Banner from "./Banner";
import Collection  from "./Collection";
import LatestProduct from "./LatestProduct";
import ProductSection from "./ProductSection";
import SocialMedia from "./SocialMedia";
import { LatestOne } from "../Data/LatestData";
import { LatestTwo } from "../Data/LatestData";
import { Social } from "../Data/SocialData";
import Footer from "../Common/Footer/Footer";

const Main = () => {



    
    return(
        <>
        <Header/> 
            <Banner/>
            <Collection/>
            <LatestProduct title={LatestOne.title} p_start={LatestOne.p_start} p_span={LatestOne.p_span} p_end ={LatestOne.p_end}/>
            <ProductSection/>
            <LatestProduct title={LatestTwo.title} p_start={LatestTwo.p_start} p_span={LatestTwo.p_span} p_end ={LatestTwo.p_end}/>
            <ProductSection/>
            <SocialMedia p_twitter={Social.p_start} p_icon={Social.p_end}/>
        <Footer/>
        </>

    )
}

export default Main;