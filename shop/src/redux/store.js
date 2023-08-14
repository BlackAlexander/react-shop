import {configureStore} from "@reduxjs/toolkit";
import {favoritesReducer} from "./slices/favorites";
import {productApiSlice} from "../redux/apis.js";
import {ratingsReducer} from "./slices/ratings";


export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        ratings: ratingsReducer,
        [productApiSlice.reducerPath]: productApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApiSlice.middleware)
});