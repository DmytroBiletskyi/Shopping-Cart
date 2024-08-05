import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from '../actions/index';
import { CartState } from '../../types';

const initialCartState: CartState = {
  items: [],
  total: 0,
};

const cartReducer = (state: CartState = initialCartState, action: any): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price,
        };
      }
    case REMOVE_FROM_CART:
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove) {
        const updatedItems = itemToRemove.quantity > 1
          ? state.items.map(item =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          : state.items.filter(item => item.id !== action.payload);
        return {
          ...state,
          items: updatedItems,
          total: state.total - itemToRemove.price,
        };
      }
      return state;
    case UPDATE_CART_ITEM:
      const itemToUpdate = state.items.find(item => item.id === action.payload.id);
      if (itemToUpdate) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((total, item) => total + item.price * item.quantity, 0),
        };
      }
      return state;
    default:
      return state;
  }
};

export default cartReducer;