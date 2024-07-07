import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://668814f50bc7155dc01a675b.mockapi.io/adverts?page=${page}&limit=4`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOneCamper = createAsyncThunk(
  "campers/fetchOne",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://668814f50bc7155dc01a675b.mockapi.io/adverts/${id}`
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
