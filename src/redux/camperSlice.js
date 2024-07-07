import { createSlice } from "@reduxjs/toolkit";
import { fetchOneCamper } from "./operations";

const initialState = {
  item: {},
  loading: false,
  error: null,
};

const camperSlice = createSlice({
  name: "camper",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneCamper.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOneCamper.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOneCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default camperSlice.reducer;
