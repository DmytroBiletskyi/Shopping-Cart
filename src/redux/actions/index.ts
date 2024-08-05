import { Product, OrderData } from "../../types";
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const PLACE_ORDER = 'PLACE_ORDER';
export const CLEAR_ORDERS = 'CLEAR_ORDERS';

export const addToCart = (item: Product) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const updateCartItem = (id: number, quantity: number) => ({
  type: UPDATE_CART_ITEM,
  payload: { id, quantity },
});

export const placeOrder = (order: OrderData) => ({
  type: PLACE_ORDER,
  payload: order,
});

export const clearOrders = () => ({
  type: CLEAR_ORDERS,
});