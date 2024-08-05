import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { clearOrders } from '../redux/actions';
import { CartItem } from '../types';
import { convertPrice } from '../utils';
import '../styles/OrderList.css';

const OrderList: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  const dispatch = useDispatch();

  const handleClearOrders = () => {
    dispatch(clearOrders());
  };

  return (
    <div className="order-list-container">
      <h2>All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <>
          {orders.map((order, index) => (
            <div key={index} className="order">
              <h3>Order {index + 1}</h3>
              <table className="order-table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{order.user.name}</td>
                  </tr>
                  <tr>
                    <th>Surname</th>
                    <td>{order.user.surname}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{order.user.address}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{order.user.phone}</td>
                  </tr>
                  <tr>
                    <th>Currency</th>
                    <td>{order.currency}</td>
                  </tr>
                </tbody>
              </table>
              <div className="items">
                <h4>Items</h4>
                <table className="order-table">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item: CartItem, itemIndex: number) => (
                      <tr key={itemIndex}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{convertPrice(item.price, order.currency).toFixed(2)} {order.currency}</td>
                        <td>{(item.quantity * convertPrice(item.price, order.currency)).toFixed(2)} {order.currency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p><strong>Order Total: {order.total} {order.currency}</strong></p>
            </div>
          ))}
          <button className={'order-list-btn'} onClick={handleClearOrders}>Clear Orders</button>
        </>
      )}
    </div>
  );
};

export default OrderList;
