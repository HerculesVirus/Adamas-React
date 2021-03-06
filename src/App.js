//import logo from './logo.svg';

import { Route, Routes } from 'react-router';
import Login from './Components/Login';
import Register from './Components/Register';
import Header from "./Common/Header/Header"
import Main from './Components/Main';
import Footer from './Common/Footer/Footer';
import Shop from './Components/Category/Shop';
import ProductPreview from './Components/ProductPreview';
import PageNotFound from './PageNotFound/PageNotFound';
import ApperalNotFound from './PageNotFound/ApperalNotFound';
import PrivateOutlet from './Components/PrivateOutlet';
//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
//store
import { Provider } from 'react-redux';
// import store from './redux/store';
import store,{persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'






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
