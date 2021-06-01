import React, { useState,useEffect } from 'react';
// import Slider from './Slider';
import Slider from 'react-slick'
import Carousel from 'react-elastic-carousel';
import '../Home_pageCSS/Main.css';
import image1 from '../assets/images/product2.jpg';
import image2 from '../assets/images/laptop_zenbook.jpg';
import image3 from '../assets/images/product1.jpg';
import useFetch from './fetch'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

 function Main(){
    let history=useHistory();
    // function handleClick() {
    //     <Link to="/Element_page"></Link>
    //     // history.push("/Element_page");
    //   }
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    // const [productList,setProductList]=useState()
    // useEffect(() => {
    //     async function fetchData(){
    //         const requestUrl='http://localhost:3001/api/san-pham'
    //         const respone= await fetch(requestUrl);
    //         const responseJson= await respone.json();
    //         const {data} =responseJson;
    //         setProductList(data);
    //         console.log(data)
    //     }
    //     fetchData();
    // }, [])
    const { data :productList, pending, error}=useFetch(
        "http://localhost:3001/api/san-pham"
    )
    return (
        <div class="container2">
             <li class="font">Items</li>
            <div className="container">
                
                <Slider {...settings}>
                    {productList && productList.map(product=>(<div>alo</div>))
                    //     productList.map(product=>(
                    //     <Link to={`/Element_page/${product.ma_san_pham}`}>
                    //         <div className="item__element">
                    //             <img src={product.file} alt="Image1"/>
                    //             <div class="text">
                    //                 <h3>{product.ten_san_pham}</h3>
                    //                 <p>{product.gia_tien}</p>
                    //                 <button >Buy now</button>
                    //             </div>
                    //         </div>
                    //     </Link>
                    // ))
                }
                    
                </Slider>
                
            </div>
           
          
        </div>
    );
};

export default Main

