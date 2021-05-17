import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import "./Orders.css";
import Order__item from "./Order__item/Order__item";
import Buy__item from "./Buy__item/Buy__item";
Orders.propTypes = {};

function Orders(props) {
  var orders = [
    {
      id: 1,
      name: "May tinh",
      price: 2000,
      count: 0,
      url:
        "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "May may",
      price: 2000,
      count: 0,
      url:
        "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const [cartItem, setCartItem] = useState([]);
  // const []
  var list = [];
  function onAdd(id, check, product) {
    const exist = cartItem.find((x) => x.id === id);
    if (exist) {
      console.log(exist.count);
      setCartItem(
        cartItem.map((x) =>
          x.id === id ? { ...exist, count: exist.count + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, count: 1 }]);
    }
  }
  function onRemove(id, product) {
    console.log(cartItem);
    const exist = cartItem.find((x) => x.id === id);
    if (exist) {
      if (exist.count === 1) {
        setCartItem(cartItem.filter((x) => x.id !== id));
      } else {
        setCartItem(
          cartItem.map((x) =>
            x.id === id ? { ...exist, count: exist.count - 1 } : x
          )
        );
      }
    }
  }
  return (
    <div className="orders">
      <div className="container">
        <div className="orders__top">
          <div className="orders__top-title">
            <h3 className="title__name">GIỎ HÀNG</h3>
            <div className="title__wrap">
              <div className="title__wrap-left">
                Sản phẩm đã được thêm vào giỏ hàng
              </div>
              <div className="title__wrap-right">
                <button className="">Tiếp tục xem sản phẩm</button>
              </div>
            </div>
          </div>
          <div className="orders__top-list">
            <div className="list__headbar">
              <span>Sản phẩm</span>
              <span>giá</span>
              <span>số lượng</span>
              <span>Thành tiền</span>
            </div>
            <div className="">
              <ul className="list__item">
                {cartItem.map((order) => (
                  <Order__item
                    key={order.id}
                    order={order}
                    onChosen={onAdd}
                    onRemove={onRemove}
                  ></Order__item>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="orders__bottom">
          <div className="orders__bottom-title">
            <h2>TỔNG GIỎ HÀNG</h2>
          </div>
          <div className="orders__bottom-list">
            <div className="list__top">
              <span>Sản phẩm</span>
              <span>Số lượng</span>
              <span>Tổng</span>
            </div>
            <div className="list">
              <Buy__item cartItem={cartItem}></Buy__item>
            </div>
            <div className="list__total">
              <h2 className="list__total-left">Tổng cộng</h2>
              <div className="list__total-right">
                <h2>
                  {cartItem.reduce((acc, currentValue) => {
                    return acc + currentValue.price * currentValue.count;
                  }, 0)}
                </h2>
                <span>Đã bao gồm thuế VAT</span>
              </div>
            </div>
            <div className="paybutton">Tiến hành thanh toán</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
