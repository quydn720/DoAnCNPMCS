import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Product from './components/Products';
function App() {
    return ( 
        <div className="App">
          <Header/>
          <Slider/>
          <Main/>
          <Product/>
          <Footer/>
        </div>
    );
}

export default App;