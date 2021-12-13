//import logo from './logo.svg';

import { Route, Routes } from 'react-router';
import Header from "./Common/Header/Header"
import Main from './Components/Main';
import Footer from './Common/Footer/Footer';
import Shop from './Components/Category/Shop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import PageNotFound from './PageNotFound/PageNotFound';
import ApperalNotFound from './PageNotFound/ApperalNotFound';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
    <>
    <Header/>
    <Routes> 
      <Route path="/" element={<Main/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
      <Route path="/Apperal" element={<ApperalNotFound/>}/>
      <Route path="/categoryShop" element={<Shop/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
