import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Element.css"
import Header from '../Header';
import Footer from '../Footer';
import Slider from "react-slick";
import { blue, red } from '@material-ui/core/colors';
import Main from '../Main';
Element.propTypes = {
    
};

function Element(props) {
    const [image,setImage]=useState('https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
    function handleImage(e){
        console.log(e.target.src);
        setImage(e.target.src)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
    function infoHandle(){
          var info= document.querySelector('.wrap__bottom-info');
          var des=document.querySelector('.wrap__bottom-description')
        if(des.classList.contains('visible'))
        {
            des.classList.remove('visible');
        }
          if(info.classList.contains('visible'))
          {

          }
          else{
                info.classList.toggle('visible')
            }
          console.log(info);
    }
    function desHandle(){
        var info= document.querySelector('.wrap__bottom-info');
        var des=document.querySelector('.wrap__bottom-description')
          if(info.classList.contains('visible'))
          {
              info.classList.remove('visible');
          }
        if(des.classList.contains('visible'))
        {

        }
        else{
              des.classList.toggle('visible')
          }
        // console.log(des);
    }
    return (
        <div className="element">
            <Header></Header>
            <div className="element__detail">
                <div className="container">
                    <div className="element__detail-tag">
                        <div className="tag__top">
                            Điện thoại  Điện thoại Samsung
                        </div>
                        <div className="tag__bottom">
                            Điện thoại Samsung Galaxy M51
                        </div>

                    </div>
                    <div className="element__detail-product">
                        <div className="product__image">
                            <div className="image__top">
                                <img src={image}></img>
                            </div>
                            <ul className="image__small">
                                <img  onClick={handleImage}className="image__small-element" src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img onClick={handleImage} src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img onClick={handleImage} src="https://images.unsplash.com/photo-1524275539700-cf51138f679b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                            </ul>
                        </div>
                        <div className="product__info">
                            <div>Giá:</div>
                            <div>Tình trạng:</div>
                            <div className="information">Thông tin:</div>
                            <div className="product__info-color">
                                <span>Màu:</span>
                                <button className="grey color" style={{backgroundColor: "blue"}}>
                                </button>
                                <button className="white color" style={{backgroundColor:"red"}}></button>
                                <button className="red color" style={{backgroundColor:"grey"}}></button>
                            </div>
                            <div>

                            <button className="add__button">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                        <div className="product__guarantee">
                            <div>Bảo hành và dịch vụ</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className="element__info">
                
            </div>
            <div className="element__description"></div> */}
            <div className="wrap">
                <div className="container">
                    <div className="wrap__top">
                        <div className="demo">
                            <div className="demo__info" onClick={infoHandle}>
                                Thông tin sản phẩm
                            </div>
                            <div className="demo__description" onClick={desHandle}>
                                Mô tả sản phẩm
                            </div>
                        </div>
                    </div>
                    
                    <div className="wrap__bottom">
                        <div className="wrap__bottom-info visible">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ratione nemo quaerat ex rerum adipisci quod modi illo aperiam voluptatem. Accusamus rem molestiae dolores magnam ea labore eaque unde eos?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus est officia, vitae molestias doloremque error soluta beatae cumque, nihil minima quo! Perferendis aperiam aut sapiente eaque praesentium repudiandae, ratione facilis.
                        </div>
                        <div className="wrap__bottom-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam tempore omnis fuga molestias dolorum aliquam hic, optio esse rem minus quis eos recusandae! Tempore consectetur earum possimus. Adipisci, culpa illo!
                        </div>
                    </div>
                </div>
            </div>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}



export default Element;