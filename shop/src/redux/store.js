import {configureStore} from "@reduxjs/toolkit";
import {favoritesReducer} from "./slices/favorites";
import {productApiSlice} from "../redux/apis.js";


export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        [productApiSlice.reducerPath]: productApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApiSlice.middleware)
});