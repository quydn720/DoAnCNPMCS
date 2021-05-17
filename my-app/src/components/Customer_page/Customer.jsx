import React from "react";
import PropTypes from "prop-types";
import Customer__info from "./Customer__info/Customer__info";
import Customer__history from "./Customer__history/Customer__history";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink,
} from "react-router-dom";
import "./Customer.css";
Customer.propTypes = {};

function Customer(props) {
  return (
    // <Router>
    <div className="customer">
      <div className="customer__banner">
        <div className="container">
          <span>
            <a href="">Trang chủ </a>
          </span>
          <span>
            <a href=""> {">"} Khách hàng</a>
          </span>
        </div>
      </div>
      <div className="customer__wrap">
        <div className="container">
          <div className="cus">
            <div className="customer__wrap-left">
              <div className="top">
                <div className="top__image">
                  <img
                    src="https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhciUyMGZhY2Vib29rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="top__info">
                  <div className="top__info-name">Pham Ngoc Anh Tin</div>
                  <div className="top__info-edit">
                    <i></i>
                    <span>Sửa thông tin</span>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <ul className="action__list">
                  <li className="action__list-item">
                    <div className="item__image">
                      <i class="fa fa-info"></i>
                    </div>
                    <a href="/Customer_page/info">Thông tin tài khoản</a>
                  </li>
                  <li className="action__list-item">
                    <div className="item__image">
                      <i class="fa fa-key"></i>
                    </div>
                    <a href="">Thay đổi mật khẩu</a>
                  </li>
                  <li className="action__list-item">
                    <div className="item__image">
                      <i class="fa fa-history"></i>
                    </div>
                    <a href="/Customer_page/customer__history">
                      Lịch sử mua hàng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="customer__wrap-right">
              <Switch>
                <Route
                  path="/Customer_page/info"
                  component={Customer__info}
                ></Route>
                <Route
                  path="/Customer_page/customer__history"
                  component={Customer__history}
                ></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* </Router> */
  }
}

export default Customer;
