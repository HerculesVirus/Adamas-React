//import logo from './logo.svg';
import Header from './Common/Header/MainHeader';
import { Route, Routes } from 'react-router';
import Main from './Main/Main';
import Footer from './Common/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    
    <Routes>
      
      <Route path="/" component={Header}></Route>
     
    </Routes>
    </>
  );
}

export default App;
