import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeOrderData } from '../orderData';
import { placeOrder } from '../redux/actions';
import '../styles/OrderForm.css';
import { UserInfo, OrderData } from '../types/index';
import { RootState } from '../redux/reducers';
import { convertPrice } from '../utils';

const OrderForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', surname: '', address: '', phone: '' });
  const currency = useSelector((state: RootState) => state.currency);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!userInfo.name || !userInfo.surname || !userInfo.address || !validatePhone(userInfo.phone)) {
      alert('Please fill all fields correctly.');
      return;
    }

    const orderTotal = cart.items.reduce((total, item) => total + item.quantity * convertPrice(item.price, currency), 0).toFixed(2);

    const orderData: OrderData = {
      user: userInfo,
      items: cart.items,
      total: orderTotal,
      currency: currency,
    };

    console.log(JSON.stringify(orderData));
    try {
      await storeOrderData(orderData);
      dispatch(placeOrder(orderData));
      alert('Order saved to Firebase');
    } catch (error) {
      console.error('Error saving order: ', error);
    }
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phone.length === 13 && phoneRegex.test(phone);
  };

  return (
    <div className="order-form">
      <input
        type="text"
        placeholder="Name"
        value={userInfo.name}
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Surname"
        value={userInfo.surname}
        onChange={(e) => setUserInfo({ ...userInfo, surname: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Address"
        value={userInfo.address}
        onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Phone +38 (000) 000-00-00"
        value={userInfo.phone}
        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
        required
      />
      <button onClick={handleSubmit}>Order</button>
    </div>
  );
};

export default OrderForm;
