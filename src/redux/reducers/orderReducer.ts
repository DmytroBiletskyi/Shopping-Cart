import { PLACE_ORDER, CLEAR_ORDERS } from '../actions/index';

export interface OrderState {
  orders: any[];
}

const initialOrderState: OrderState = {
  orders: [],
};

const orderReducer = (state: OrderState = initialOrderState, action: any): OrderState => {
  switch (action.type) {
    case PLACE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case CLEAR_ORDERS:
      return {
        ...state,
        orders: [],
      };
    default:
      return state;
  }
};

export default orderReducer;