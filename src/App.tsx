import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import OrderForm from './components/OrderForm';
import { RootState } from './redux/reducers';
import { convertPrice } from './utils'
import OrderList from './components/OrderList';

const App: React.FC = () => {
  const [isCart, setIsCart] = useState(false);
  const [isOrderList, setIsOrderList] = useState(false);
  const handleIsCartChange = () => {
    setIsCart(!isCart);
    setIsOrderList(false);
  };

  const handleIsOrderListChange = () => {
    setIsOrderList(!isOrderList);
    setIsCart(false);
  };

  const total = useSelector((state: RootState) => state.cart.total);
  const currency = useSelector((state: RootState) => state.currency);

  return (
    <div className="App">
      <Header onIsCartChange={handleIsCartChange} onIsOrderListChange={handleIsOrderListChange} isCart={isCart} isOrderList={isOrderList} />
      <main>
        {isOrderList ? (
          <OrderList />
        ) : (!isCart ? (
          <ProductList />
        ) : (
          <>
            <div className="cart-page">
              <Cart />
              <OrderForm />
            </div>
            <div className="total-container">
              {total > 0 && (
                <p className="total-price">Total: {convertPrice(total, currency).toFixed(2)} {currency}</p>
              )}
            </div>
          </>
        )
        )}
      </main>
    </div>
  );
};

export default App;
