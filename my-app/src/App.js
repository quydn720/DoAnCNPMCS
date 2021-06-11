import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from "react";

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'; 
import SignUp_page from './SignUp_page/SignUp_page';
import Login_page from './Login_page/Login_page';
import Home_pageJS from './Home_pageJS/Home_page';

import Header from './components/Header';
import Footer from './components/Footer';
import Orders from './components/Orders_page/Orders';
import Customer from './components/Customer_page/Customer';
import Header_auth from './components/Header_auth';
import Element from './components/Element__page/Element'
import axios from 'axios';
import { Component } from 'react';
function App(props) {
    const [success,setSuccess]=useState(false);
    const [account,setAccount]= useState([]);

    useEffect(()=>{
      async function Data(){
      const requestUrl = `http://localhost:3001/api/nguoi-dung/thong-tin`;
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer" + localStorage.getItem('access_token'));

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(requestUrl, requestOptions)
        .then(response =>{ 
            return response.json()
        })
        .then(result => {
          console.log(result)
          setAccount({
            account: result
          })
          
        })
        .catch(error => console.log('error', error));
      }
      Data();
    },[])
    

    return ( 
        <Router>
      <div>
       <Header></Header>
        <Switch>

          <Route key="homepage" exact path="/" component={Home_pageJS}/>
          <Route key="element" exact path="/Element_page/:id" component={Element}/>
          <Route key="orers" path="/Orders_page" component={Orders}></Route>
          <Route key="login" exact path="/Login_page" component={Login_page}/>
          <Route key="signup" exact path="/SignUp_page" component={SignUp_page}/>
          <Route key="customer" path="/Customer_page" component={Customer}></Route>
        </Switch>
        <Footer></Footer>
      </div>
        </Router>
    );
}
export default App;