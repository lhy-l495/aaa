// src/components/Checkout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>结算</h2>
      <form className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">姓名:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">地址:</label>
          <textarea id="address" name="address" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="payment">支付方式:</label>
          <select id="payment" name="payment" required>
            <option value="">请选择</option>
            <option value="credit">信用卡</option>
            <option value="alipay">支付宝</option>
            <option value="wechat">微信支付</option>
          </select>
        </div>
        <button type="submit" className="btn">提交订单</button>
      </form>
      <Link to="/cart" className="back-link">返回购物车</Link>
    </div>
  );
};

export default Checkout;