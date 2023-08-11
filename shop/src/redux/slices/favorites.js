import {createSlice} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        setFavs: (state, action) => {
            state.splice(0, state.length, ...action.payload);
        }
    }
});

export const {setFavs} = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export const selectFavs = (state) => state.favorites;