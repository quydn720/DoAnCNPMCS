import React from "react";
import PropTypes from "prop-types";
import "./Customer__pass.css";
Customer__pass.propTypes = {};

function Customer__pass(props) {
  return (
    <div className="customer__pass">
      <h2>Thay đổi mật khẩu</h2>
      <div className="pass__wrap">
        <div className="account">
          <label htmlFor="account">Tài khoản</label>
          <input type="text" onChange="none" />
        </div>
        <div className="account">
          <label htmlFor="account">Mật khẩu cũ</label>
          <input type="text" onChange="none" />
        </div>
        <div className="account">
          <label htmlFor="account">Mật khẩu mới</label>
          <input type="text" onChange="none" />
        </div>
        <div className="account">
          <label htmlFor="account">Xác nhận mật khẩu mới</label>
          <input type="password" onChange="none" />
        </div>
        <div className="button">
          <button>Cập nhật</button>
        </div>
      </div>
    </div>
  );
}

export default Customer__pass;
