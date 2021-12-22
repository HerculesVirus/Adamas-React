import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AsideCategory from './aside/AsideCategory';
import CardsGrid from './CardsGrid';

import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryShop } from '../../redux/Home/Shop/ShopAction';
import MUI_BACKDROP from '../MUI/BackDrop';
import '../../assets/css/Shop.css'


const Shop = ()=> {
    //state
    const [currentPage ,setCurrentPage] = useState(0);
    const [totalPage , SetTotalPage] = useState(0);
const [pages,setpages]=useState()
    //Category ~ that is coming from Category/CollectionReducer
    const category = useSelector(state => state.collection.data)
    // console.log(`Same CAT's from collection`)
    // console.log(selector)
    const shop = useSelector ( state => state.shop)
    console.log('Shop is Whole Object')
    console.log(shop)
    const shopID = useSelector( state => state.shop.data?._id )
    const cardItem = useSelector( state => state.shop.data && state.shop?.data)
    

    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(shopID)
        if(shopID){
            dispatch(fetchCategoryShop(shopID  , currentPage))
        }
        else if(shopID === undefined){
            dispatch(fetchCategoryShop(null , currentPage))
        }
    },[currentPage ,dispatch ,shopID])
    //cardItem
    useEffect(()=>{
        if(cardItem){
        SetTotalPage(cardItem.Totalpages)
        }
    },[cardItem])

    useEffect(()=>{
        // alert(totalPage)
        const p = new Array(totalPage).fill(null).map((v,i)=> i)
        setpages(p)

    },[totalPage])
    
    //pagination
    const PageHandler =(num) => {
        // console.log("PageHandler : "+num)
        setCurrentPage(num)
    }
    const goToPrevious =()=>{
        setCurrentPage(Math.max(0,currentPage - 1));
    }
    const goToNext =()=>{
        setCurrentPage(Math.min(totalPage-1,currentPage + 1));
    }

    // setpages(p)
    return(
        <>
        {/* {console.log("currentPage : "+currentPage )} */}
        {/* {console.log("render : "+goal)} */}
                     
            <div className="breadcrumb-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-12">
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
                        </div>
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
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <AsideCategory Categories={category} page={currentPage}  />
                        </div>
                        {shop.loading  || null?
                        <>
                            <MUI_BACKDROP loading ={shop.loading}/>
                        </> 
                        :
                        <>
                        {                        
                            <div className="col-md-9 col-12">
                                <CardsGrid Products={cardItem}/>
                            </div>
                        }
                        </>
                        }

                        {totalPage && <Pagination page={pages} onClickHandler={PageHandler} prev={goToPrevious} next={goToNext}/>}
                    </div>
                </div>
            </div>
            
        </>
    )

}
export default Shop;