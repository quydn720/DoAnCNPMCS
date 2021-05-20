import React from "react";
import PropTypes from "prop-types";
import "./Customer__info.css";
Customer__info.propTypes = {};

function Customer__info(props) {
  return (
    <div className="customer__info">
      <h2>Thông tin tài khoản</h2>
      <form action="">
        <div>
          <label htmlFor="name">Họ và tên:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="phone">Số điện thoại:</label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="gender">Giới tính:</label>
          <input type="radio" id="male" name="gender" value="male"></input>
          <label htmlFor="male">Nam</label>
          <input type="radio" id="female" name="gender" value="female"></input>
          <label htmlFor="female">Nữ</label>
        </div>
        <div>
          <label htmlFor="address">Địa chỉ:</label>
          <input type="text" name="address" id="address" />
        </div>
        <div>
          <label htmlFor="birthday">Ngày sinh:</label>
          <input type="date" id="birthday" name="birthday"></input>
        </div>
        <button action="submit">Cập nhật</button>
      </form>
    </div>
  );
}

export default Customer__info;
