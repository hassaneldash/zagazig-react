import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartSlice,
  },
});

export default store;
