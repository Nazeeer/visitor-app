import { createSlice } from "@reduxjs/toolkit";
import login from "./act/login";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const token = Cookies.get("token");

const initialState = {
  isAuth: Boolean(token) || true,
  // role: "ROLE_ADMIN",
  role: "ROLE_USER",
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearToken: (state) => {
      Cookies.remove("token");
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.status === 200) {
          const token = payload.data.token;
          const decodedToken = jwtDecode(token);
          const expirationTime = new Date(decodedToken.exp * 1000);
          Cookies.set("token", token, { expires: expirationTime });
          state.isAuth = true;
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.result = null;
      });
  },
});

export const { clearToken } = authSlice.actions;
export { login };
export default authSlice.reducer;
