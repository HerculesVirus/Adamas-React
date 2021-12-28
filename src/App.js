//import logo from './logo.svg';

import { Route, Routes } from 'react-router';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Header from "./Common/Header/Header"
import Main from './Components/Main';
import Footer from './Common/Footer/Footer';
import Shop from './Components/Shop/Shop.js';
import ProductPreview from './Components/ProductPreview/ProductPreview';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ApperalNotFound from './Components/PageNotFound/ApperalNotFound';
import PrivateOutlet from './Components/routes/PrivateOutlet';
//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
//store - GLUE
import { Provider } from 'react-redux';
// import store from './redux/store';
import store,{persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import PaymentCard from './Components/Cart/PaymentCard';
import Contact from './Components/Contact/Contact';
import CartList from './Components/Cart/CartList';






function App() {

  return (
    <>
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
        <Header/>
          <Routes> 
            <Route path="/" element={<Main/>}/>
            {/* Pages */}
            <Route path="/*" element={<PageNotFound/>}/>
            <Route path="/Apperal" element={<ApperalNotFound/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/cardlist" element={<cardList/>}/>
            <Route path="/PaymentCard" element={<PaymentCard/>}/>
            <Route path="/Cartlist" element={<CartList/>}/>

            {/*Private Route */}
            <Route  element={<PrivateOutlet />}>
                  <Route path="/categoryShop" element={<Shop/>}/>
            </Route>
            <Route path="/ProductPreview/:id" element={<ProductPreview/>}/>
            {/* Validation Route */}
            <Route path="/signin" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        <Footer/>
      </PersistGate>
    </Provider>
    </>
  );
}

export default App;
