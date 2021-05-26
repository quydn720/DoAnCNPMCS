import React from 'react';
import '../Login_page/Login_page.css';
import image1 from '../assets/images/Vivo.jpg';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import '../Home_pageJS/Home_page';
import axios from 'axios';
import { Component } from 'react';
import Home_page from '../Home_pageJS/Home_page';

class SignUp_page extends Component {

    constructor(props){
        super(props);
        this.state ={
            success: false
        };
    }
   SignUp = e =>{
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

        fetch('http://localhost:3001/api/nguoi-dung',{
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                "ten_nguoi_dung" : "a",
                "ten_tai_khoan": document.getElementById('email').value,
                "mat_khau" : document.getElementById('password').value,
                "email" :document.getElementById('email').value,
                "dia_chi" : "a",
                "so_dien_thoai": "1234567891"
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
        <div>{(success) ? <Home_page></Home_page> :
        <section className="page-container">
            <div className="imgBx">
                <img src={image1}/>
            </div>
            <div className="contentBx">
                <div className="formBx">
                    <h2>Sign Up</h2>
                    <form onSubmit={this.SignUp}>
                        <div className="inputBx">
                            <h6 className="name">Username or email </h6>
                            <input type="email" name="email" id="email"></input>
                        </div>
                        <div className="inputBx">
                            <h6 className="name">Password </h6>
                            <input type="password" name="password" id="password"></input>
                        </div>
                        <div className="inputBx">
                            <h6 className="name">Confirm password</h6>
                            <input type="password" name="C_password" id="C_password"></input>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Sign up" name=""/>
                        </div>

                        <div className="inputBx">
                            <p>Already have an account? <a href="#">
                                <Link to="../Login_page/"> 
                                Sign in
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

export default SignUp_page;