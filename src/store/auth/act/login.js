import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../services/axios-instance";
import axios from "axios";

const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await api.post("v1/Identity/Login");
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue("unexpected error");
    }
  }
});

export default login;
