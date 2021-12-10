import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AsideCategory from './aside/AsideCategory';
// import Header from '../../Common/Header/Header';
// import Footer from '../../Common/Footer/Footer';
import CardsGrid from './CardsGrid';
import '../../assets/style.css'
import axios from 'axios';
import Pagination from './Pagination';


const Shop = ()=> {
    const [goal,setGoal]=useState(false)
    const [id,setId] =useState(null)
    const [Category,setCategory] = useState(null);
    const [Product , setProduct] = useState(null);
    const [currentPage ,setCurrentPage] = useState(0);
    const [totalPage , SetTotalPage] = useState(0);
    const [shortlistProduct , setShortlistProduct] = useState(null)

    //All Button Clicked
    const AllClicked = (value)=>{
        setGoal(value)

    }
    const HandleCatName = async (id) => {
        console.log(id)
        if(id){
            await setGoal(true)
            await setId(id)
            setCurrentPage(0)
        }
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/publicsite/categries`)
        .then(res => setCategory(res.data))
        .catch( (err)=> console.log(err))

        if(goal === false){
            axios.get(`http://localhost:8000/api/publicsite/category/product?page=${currentPage}`)
            .then( res =>{
                SetTotalPage(res.data.totalPages)
                setProduct(res.data.data)
            })
            .catch( (err)=> console.log(err))
        }
        else if(goal === true){
             // Other button's except ALL button
            axios.get(`http://localhost:8000/api/publicsite/category/product?page=${currentPage}&id=${id}`)
            .then(res => {
                setShortlistProduct(res.data.data)
                SetTotalPage(res.data.totalPages)
            })
            .catch(err => console.log(err))            
        }

    },[currentPage, id, goal])

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
    const pages = new Array(totalPage).fill(null).map((v,i)=> i)
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
                            <AsideCategory Categories={Category} ClickedCatName={HandleCatName} Decision={AllClicked}/>
                        </div>
                        <div className="col-md-9 col-12">
                            {goal ? 
                            <CardsGrid Products={shortlistProduct}/> : 
                            <CardsGrid Products={Product}/> }
                        </div>
                        <Pagination page={pages} onClickHandler={PageHandler} prev={goToPrevious} next={goToNext}/>
                    </div>
                </div>
            </div>
            
        </>
    )

}
export default Shop;