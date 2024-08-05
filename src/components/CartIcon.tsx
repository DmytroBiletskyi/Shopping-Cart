import React from 'react';
import { useSelector } from 'react-redux';
import { CartIconProps } from '../types/index';
import { convertPrice } from '../utils'
import { RootState } from '../redux/reducers';


const CartIcon: React.FC<CartIconProps> = ({ isCart }) => {
  const total = useSelector((state: RootState) => state.cart.total);
  const currency = useSelector((state: RootState) => state.currency);

  return (
    <div>
      <i className="cart-icon">Cart 🛒 </i>
      {total > 0 && !isCart && <span>{convertPrice(total, currency)} {currency}</span>}
    </div>
  );
};

export default CartIcon;