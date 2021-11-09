import { AddItemToCart, DeleteItem, Quantity } from './Cart.functions';

const INITIAL_STATE = {
   cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'ADD_ITEM':
         return {
            ...state,
            cartItems: AddItemToCart(state.cartItems, action.payload),
         };
      case 'REMOVE_ITEM':
         return {
            ...state,
            cartItems: DeleteItem(state.cartItems, action.payload),
         };
      case 'REMOVE_ALL_ITEMS':
         return {
            ...state,
            cartItems: [],
         };
      case 'INCREMENT_QUANTITY':
         return {
            ...state,
            cartItems: Quantity(state.cartItems, action.payload, 'plus'),
         };
      case 'DECREMENT_QUANTITY':
         return {
            ...state,
            cartItems: Quantity(state.cartItems, action.payload, 'minus'),
         };
      default:
         return state;
   }
};

export default cartReducer;
