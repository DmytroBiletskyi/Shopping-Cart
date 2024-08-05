import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import currencyReducer from './currencyReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  currency: currencyReducer,
  orders: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;