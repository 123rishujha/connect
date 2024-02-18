import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { userLogin } = userSlice.actions;
const userReducer = userSlice.reducer;

export { userLogin, userReducer };
