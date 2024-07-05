import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(
        "https://668814f50bc7155dc01a675b.mockapi.io/adverts"
      );

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
