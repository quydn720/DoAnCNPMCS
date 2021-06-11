import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Customer__pass.css";
import axios from "axios";
Customer__pass.propTypes = {};

function Customer__pass(props) {
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

  function UpdateAccount() {

  }
  return (
    <div className="customer__pass">
      {account && (
        <div>
          <h2>Thay đổi mật khẩu</h2>
          <div className="pass__wrap">
            <div className="account">
              <label htmlFor="account">Tài khoản</label>
              <input type="text" onChange="none" value={account.ten_tai_khoan} />
            </div>
            <div className="account">
              <label htmlFor="account">Mật khẩu cũ</label>
              <input type="text" onChange="none" value={account.mat_khau} />
            </div>
            <div className="account">
              <label htmlFor="account">Mật khẩu mới</label>
              <input type="password" onChange="none" />
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
      )}
    </div>
  );
}

export default Customer__pass;
