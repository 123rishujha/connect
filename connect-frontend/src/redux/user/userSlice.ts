import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    UserLogin: (state, action) => {
      state.user = action.payload;
    },
  },
});

const userReducer = userSlice.reducer;
const userActions = userSlice.actions;

export { userReducer, userActions };
