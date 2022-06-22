
import Navbarre from './Components/Navbarre';
import React, { Component }  from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  ListRoutes  from "./Routes/ListRoutes";
import '../node_modules/react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";
import { ToastContainer } from 'react-toastify';
//import CarouselHome from './Components/CarouselHome';

function App() {
  return (
    <>
    <CartProvider>
      <Router>
      
      <Navbarre/>
      
      <ListRoutes/>
      <ToastContainer />
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
