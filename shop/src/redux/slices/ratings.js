import {createSlice} from "@reduxjs/toolkit";

const ratingsSlice = createSlice({
    name: 'ratings',
    initialState: [],
    reducers: {
        setRatings: (state, action) => {
            state.splice(0, state.length, ...action.payload);
        }
    }
});

export const {setRatings} = ratingsSlice.actions;
export const ratingsReducer = ratingsSlice.reducer;
export const selectRatings = (state) => state.ratings;