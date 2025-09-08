// src/components/ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import '../styles/ProductList.css';

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>我们的鲜花</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">¥{product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;