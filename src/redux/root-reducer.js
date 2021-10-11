import { combineReducers } from 'redux';
import cartReducer from './cart/Cart.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
   user: userReducer,
   cart: cartReducer,
});
