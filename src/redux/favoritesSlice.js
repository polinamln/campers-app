import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const { camper } = action.payload;
      state.items.push(camper);
    },
    removeFromFavorites: (state, action) => {
      const { camperId } = action.payload;
      state.items = state.items.filter((camper) => camper._id !== camperId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
