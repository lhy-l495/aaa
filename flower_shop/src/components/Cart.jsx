// src/components/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
  // 示例购物车数据
  const cartItems = [
    { id: 1, name: '红玫瑰', price: 99.99, quantity: 2, image: '/images/rose.jpg' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>您的购物车</h2>
      {cartItems.length === 0 ? (
        <p>购物车是空的</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>单价: ¥{item.price.toFixed(2)}</p>
                  <p>数量: {item.quantity}</p>
                </div>
                <div className="item-total">
                  <p>小计: ¥{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>总计: <strong>¥{subtotal.toFixed(2)}</strong></p>
            <Link to="/checkout" className="btn">去结算</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;