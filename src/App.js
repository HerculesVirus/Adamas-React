//import logo from './logo.svg';

import { Route, Routes } from 'react-router';
import Main from './MyComponent/Main';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import PageNotFound from './PageNotFound/PageNotFound';
import ApperalNotFound from './PageNotFound/ApperalNotFound';

function App() {
  return (
    <>
    <Routes> 
      <Route path="/" element={<Main/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
      <Route path="/Apperal" element={<ApperalNotFound/>}/>
      {/* <Route path="/Categorylist" element={<CategoryShop/>}/> */}
    </Routes>
    </>
  );
}

export default App;
