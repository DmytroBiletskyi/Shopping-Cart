import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';
import { convertPrice } from '../utils'
import { RootState } from '../redux/reducers';
import { Product } from '../types';
import '../styles/ProductList.css';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
  { id: 4, name: 'Product 4', price: 40 },
  { id: 5, name: 'Product 5', price: 50 },
  { id: 6, name: 'Product 6', price: 60 },
  { id: 7, name: 'Product 7', price: 70 },
];

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state: RootState) => state.currency);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-container">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">Price: {convertPrice(product.price, currency)} {currency}</p>
          <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Buy/Add</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
