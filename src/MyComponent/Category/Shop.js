import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AsideCategory from './aside/AsideCategory';
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import CardsGrid from './CardsGrid';
import '../../assets/style.css'
import axios from 'axios';


const Shop = ()=> {
    const [goal ,setGoal]= useState(false)
    const [Category,setCategory] = useState(null);
    const [Product , setProduct] = useState(null);
    // const [ShortlistCatName,setShortlistCatName] = useState(null);
    const [shortlistProduct , setShortlistProduct] = useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/admin/publicsite/categries`)
        .then(res => setCategory(res.data))
        .catch( (err)=> console.log(err))

        axios.get(`http://localhost:8000/api/admin/publicsite/product`)
        .then( res => setProduct(res.data))
        .catch( (err)=> console.log(err))

    },[])
    const HandleCatName = async (id) => {
        console.log('Shop : '+id)
        if(id){
            await setGoal(true)
            console.log("Handle Cat bool : "+goal)
        }
        // await setShortlistCatName(id)
        axios.get(`http://localhost:8000/api/admin/publicsite/product/${id}`)
        .then(res => {
            setShortlistProduct(res.data)
        })
        .catch(err => console.log(err))

    }
    const handleProduct =(val)=>{
        setGoal(val)
    }
    return(
        <>
        {console.log("render : "+goal)}
            <Header/>            
            <div class="breadcrumb-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9 col-12">
                            <h1 class="text-white">Shop with a Sidebar on left</h1>
                            <div style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li class="breadcrumb-item ">
                                        <Link class="text-white" to="#">Home 
                                            <i class="fa fa-angle-double-right fa-sm"></i>
                                        </Link>
                                    </li>
                                    <li class="breadcrumb-item text-white" aria-current="page">Shop with Sidebar</li>
                                </ol>
                            </div>
                        </div>
                        <div class="col-md-3 col-12 ">
                            <div class="row float-md-end float-sm-none">
                                <div class="col-md-2 col-12 float-end">
                                    <span class="mobile-font "><i class="fa fa-mobile fa-lg text-white"></i></span>
                                </div>
                                <div class="col-md-10 col-12 p-2">
                                    <h3 class="text-white mb-0">+565 975 658</h3>
                                    <p class="text-white mb-0 ps-3">Monday-Friday, 8:00-20:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-12">
                            <AsideCategory Categories={Category} ClickedCatName={HandleCatName} Decision={handleProduct}/>
                        </div>
                        <div class="col-md-9 col-12">
                            
                            {goal ? 
                            <CardsGrid Products={shortlistProduct}/> : 
                            <CardsGrid Products={Product}/> }
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )

}
export default Shop;