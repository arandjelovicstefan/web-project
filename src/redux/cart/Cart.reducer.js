import { AddItemToCart } from './Cart.functions';

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
      default:
         return state;
   }
};

export default cartReducer;
