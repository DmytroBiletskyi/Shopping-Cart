import React from 'react';
import '../styles/Header.css';
import CartIcon from './CartIcon';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrency } from '../redux/reducers/currencyReducer';
import { HeaderProps } from '../types/index';
import { RootState } from '../redux/reducers';

const Header: React.FC<HeaderProps> = ({ onIsCartChange, onIsOrderListChange, isCart,  isOrderList}) => {

    const currency = useSelector((state: RootState) => state.currency);
    const dispatch = useDispatch();
    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCurrency(e.target.value));
    };
    return (
        <header className="header">
            <button className={`order-list-button ${isOrderList ? 'selected' : ''}`} onClick={onIsOrderListChange}>Orders</button>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <select value={currency} onChange={handleCurrencyChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
                <button className={`cart-button ${isCart ? 'selected' : ''}`} onClick={onIsCartChange}>
                    <CartIcon isCart={isCart} />
                </button>
            </div>
        </header>
    );
};

export default Header;