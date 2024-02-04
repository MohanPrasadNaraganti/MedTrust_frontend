import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Import your reducer here
import cartReducer from './cartReducer'; // Import your reducer here

const rootReducer = combineReducers({
  user: userReducer, 
  cart: cartReducer,
});

export default rootReducer;
