import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Product from '../components/Products';
import Laptop from '../components/Popular_Laptop';
import Phone from '../components/Popular_phone';
import { Component } from 'react';
import axios from 'axios';
import connect from 'react-redux';
class Home_page extends Component {
   
    componentDidMount(){
        axios({
            method:"GET",
            url: ''
        })
    }

    render(){
        return (
            <div>
            <Slider/>
            <Main/>
            <Product/>
            <Laptop/>
            <Phone/>
            </div>
        );
    }
};

export default Home_page;