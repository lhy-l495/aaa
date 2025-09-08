// src/components/ProductDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>未找到该商品</div>;
  }

  const handleAddToCart = () => {
    // 这里可以添加加入购物车的逻辑
    alert(`已将 ${quantity} 份 ${product.name} 加入购物车`);
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">¥{product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <div className="quantity-selector">
          <label>数量:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleAddToCart}>加入购物车</button>
        <Link to="/products" className="back-link">返回商品列表</Link>
      </div>
    </div>
  );
};

export default ProductDetail;