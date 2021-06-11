import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Customer__info.css";
import { useParams } from 'react-router-dom';
import axios from "axios";

Customer__info.propTypes = {};
function Customer__info(props) {
  const { id } = useParams();
  const [account, setAccount] = useState([]);
  useEffect(() => {
    async function fetchData() {
      if (localStorage.getItem('access_token') != null) {
        axios.get('http://localhost:3001/api/nguoi-dung/thong-tin', { withCredentials: true }).then((res) => {
          console.log(res.data)
          setAccount(res.data.data);

        })
      }
    }
    fetchData();
  }, []);

  return (
    <div className="customer__info">
      {account && (
        <div>
          <h2>Thông tin tài khoản</h2>
          <form action="">
            <div>
              <label htmlFor="name">Họ và tên: </label>
              <input type="text" name="name" id="name" value={account.ten_tai_khoan} />
            </div>
            <div>
              <label htmlFor="phone">Số điện thoại:</label>
              <input type="text" name="phone" id="phone" value={account.so_dien_thoai} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" value={account.email} />
            </div>
            <div>
              <label htmlFor="gender">Giới tính:</label>
              <input type="radio" id="male" name="gender" value="male" checked={true}></input>
              <label htmlFor="male">Nam</label>
              <input type="radio" id="female" name="gender" value="female"></input>
              <label htmlFor="female">Nữ</label>
            </div>
            <div>
              <label htmlFor="address">Địa chỉ:</label>
              <input type="text" name="address" id="address" value={account.dia_chi} />
            </div>
            <div>
              <label htmlFor="birthday">Ngày sinh:</label>
              <input type="date" id="birthday" name="birthday"></input>
            </div>
            <button action="submit">Cập nhật</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Customer__info;
