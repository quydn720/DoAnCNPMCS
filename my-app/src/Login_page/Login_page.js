import React, { useState, useEffect } from 'react';
import './Login_page.css';
import image1 from '../assets/images/Vivo.jpg';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
//import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Component } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../Home_pageJS/Home_page';
import Home_page from '../Home_pageJS/Home_page';
import { extend } from 'jquery';
/*const responseFacebook = (response)=>{
    console.log(response);
    this.setState({
        isLoggedIn: true
    })
}*/

class Login_page extends Component{
    constructor(props){
        super(props);
        this.state ={
            success: false
        };
    }
   Login = e =>{
       e.preventDefault();
    //   let request = {
    //       ten_tai_khoan: document.getElementById('ten_tai_khoan').value,
    //       mat_khau: document.getElementById('mat_khau').value
    //   }
    //   axios.post("http://localhost:3001/api/auth/login", request)
    //   .then(resp => {
    //     console.log(resp.data);
    //     this.setState({
    //         success: true
    //     });

    //     console.log(this.state);
        
    //   })
    //   .catch(err=>{
    //       console.log(err);
    //   })

        fetch('http://localhost:3001/api/auth/login',{
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                "ten_tai_khoan": document.getElementById('ten_tai_khoan').value,
                "mat_khau" : document.getElementById('mat_khau').value
            })
        }).then((result ) =>{
            result.json().then((resp)=>{
                console.log(resp.success);
                this.setState({
                    success: resp.success
                })
            })
        })

    };
    render(){
        var { success } = this.state;
        return (

       <div> {  (success) ? <Home_page></Home_page>
            :
        <section className="page-container">
            <div className="imgBx">
                <img src={image1}/>
            </div>
            <div className="contentBx">
                <div className="formBx">
                    <h2>Sign In</h2>
                    <form onSubmit={this.Login}>
                        <div className="inputBx">
                            <h6 className="name">Username </h6>
                            <input type="text" name="ten_tai_khoan" id="ten_tai_khoan" ></input>
                        </div>
                        <div className="inputBx">
                            <h6 className="name">Password </h6>
                            <input type="password" name="ten_tai_khoan" id="mat_khau" ></input>
                        </div>
                        <div className="remember">
                            <label>
                               <input type="checkbox" name=""></input>
                               <span> Remember me </span>
                            </label>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Sign in"/>
                        </div>

                        <div className="inputBx">
                            <p>Don't have an account? <a href="#">
                                <Link to="../SignUp_page">
                                Sign up
                                </Link>
                                </a></p>
                        </div>
                    </form>
                    <h3>Login with social media</h3>
                    <ul className="sci">
                    <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                        
                        <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.google.com"><i className="fa fa-google"></i></a>
                    </ul>
                </div>
            </div>
        </section>
        }
        </div>
    );
    }
    
    
   
};

export default Login_page;