import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer'; // Import your cart reducer

const store = configureStore({
    reducer: {
        cart: cartReducer, // Use a 'cart' key for your cartReducer

    },
});

export default store;
