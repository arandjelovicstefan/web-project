import { AddItemToCart, DeleteItem } from './Cart.functions';

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
      default:
         return state;
   }
};

export default cartReducer;
