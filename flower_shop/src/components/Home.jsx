// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h2>欢迎来到花店</h2>
        <p>用鲜花传递您的情感</p>
        <Link to="/products" className="btn">浏览鲜花</Link>
      </section>
      <section className="featured">
        <h3>特色推荐</h3>
        <div className="featured-item">
          <img src="/images/rose.jpg" alt="红玫瑰" />
          <h4>红玫瑰</h4>
          <p>经典之选，表达爱意</p>
        </div>
      </section>
    </div>
  );
};

export default Home;