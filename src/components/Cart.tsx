import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartItem } from '../redux/actions';
import { CartItem } from '../types';
import { convertPrice } from '../utils';
import { RootState } from '../redux/reducers';
import '../styles/Cart.css';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const currency = useSelector((state: RootState) => state.currency);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateCartItem(id, quantity));
    }
  };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        cartItems.map((item: CartItem) => (
          <div key={item.id} className="cart-item">
            <div>
              <h3>{item.name}</h3>
              <p>Price: {convertPrice(item.price, currency)} {currency}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
