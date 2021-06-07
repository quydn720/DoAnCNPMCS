import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Element.css";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "react-slick";
import { blue, red } from "@material-ui/core/colors";
import Main from "../Main";
import useFetch from "../fetch";
import { useHistory, useParams } from "react-router-dom";
Element.propTypes = {
  post: PropTypes.object,
};

function Element(props) {
  const history = useHistory();
  const routeChange = () => {
    let path = "/Orders_page";
    history.push(path);
  };
  const { id } = useParams();
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  );
  const [product, setProduct] = useState({});
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requestUrl = `http://localhost:3001/api/san-pham/${id}`;
      const respone = await fetch(requestUrl);
      const responseJson = await respone.json();
      const { data } = responseJson;
      setProduct(data);
      // console.log(data)
    }
    fetchData();
  }, [id]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("orders")))
      setOrder(JSON.parse(localStorage.getItem("orders")));
    else {
      setOrder([]);
    }
    // setImage(product.file && product.file[0]);
  }, []);

  // JSON.stringify(orders)
  const handleAddProduct = (e) => {
    const orders1 = [...orders];
    orders1.push({
      id: id,
      ten_san_pham: product.ten_san_pham,
      gia_tien: product.gia_tien,
      count: 1,
      file: product.file,
    });
    setOrder(orders1);
    localStorage.setItem("orders", JSON.stringify(orders1));

    if (JSON.parse(localStorage.getItem("orders"))) {
      routeChange();
    }
  };
  // console.log(orders);
  function infoHandle() {
    var info = document.querySelector(".wrap__bottom-info");
    var des = document.querySelector(".wrap__bottom-description");
    if (des.classList.contains("visible")) {
      des.classList.remove("visible");
    }
    if (info.classList.contains("visible")) {
    } else {
      info.classList.toggle("visible");
    }
    console.log(info);
  }
  function desHandle() {
    var info = document.querySelector(".wrap__bottom-info");
    var des = document.querySelector(".wrap__bottom-description");
    if (info.classList.contains("visible")) {
      info.classList.remove("visible");
    }
    if (des.classList.contains("visible")) {
    } else {
      des.classList.toggle("visible");
    }
    // console.log(des);
  }
  return (
    <div className="element">
      {product && (
        <div>
          <div className="element__detail">
            <div className="container">
              <div className="element__detail-tag">
                <div className="tag__top">
                  Điện thoại {">"} Điện thoại Samsung
                </div>
                <div className="tag__bottom">Điện thoại Samsung Galaxy M51</div>
              </div>
              <div className="element__detail-product">
                <div className="product__image">
                  <div className="image__top">
                    <img src={image}></img>
                  </div>
                  <ul className="image__small">
                    {product.file != null &&
                      product.file.map((file, index) => (
                        <img
                          onClick={() => setImage(product.file[index])}
                          className="image__small-element"
                          src={product.file && product.file[index]}
                          alt=""
                        />
                      ))}
                  </ul>
                </div>
                <div className="product__info">
                  <h3>{product.ten_san_pham}</h3>
                  <div>Giá:{product.gia_tien}</div>
                  <div>Tình trạng:{product.tinh_trang_san_pham}</div>
                  <div className="information">Thông tin:</div>
                  <div className="product__info-color">
                    <span>Màu:</span>
                    <button
                      className="grey color"
                      style={{ backgroundColor: "blue" }}
                    ></button>
                    <button
                      className="white color"
                      style={{ backgroundColor: "red" }}
                    ></button>
                    <button
                      className="red color"
                      style={{ backgroundColor: "grey" }}
                    ></button>
                  </div>
                  <div>
                    <button className="add__button" onClick={handleAddProduct}>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
                <div className="product__guarantee">
                  <div>Bảo hành và dịch vụ</div>
                </div>
              </div>
            </div>
          </div>

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
                  {product.cau_hinh}
                </div>
                <div className="wrap__bottom-description">{product.mo_ta}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Main></Main>
    </div>
  );
}

export default Element;
