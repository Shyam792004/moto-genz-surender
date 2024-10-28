import reducers from "@/pages/Shared/reducers";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload; // This should include the email
    },
    clearUser(state) {
      state.user = null;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser, logout } = authSlice.actions;
export default authSlice.reducer;
