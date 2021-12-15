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
import ProductPreview from './Components/ProductPreview';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
    <Provider store={store}>
      <Header/>
        <Routes> 
          <Route path="/" element={<Main/>}/>
          {/* Pages */}
          <Route path="/*" element={<PageNotFound/>}/>
          <Route path="/Apperal" element={<ApperalNotFound/>}/>
          <Route path="/categoryShop" element={<Shop/>}/>
          <Route path="/ProductPreview" element={<ProductPreview/>}/>
          {/* Validation Route */}
          <Route path="/signin" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      <Footer/>
    </Provider>
    </>
  );
}

export default App;
