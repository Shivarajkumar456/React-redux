import { createSlice } from '@reduxjs/toolkit';
const initialAuthState = {authentication: false}

const authSlice = createSlice({
  name:'Authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {state.authentication = true},
    logout(state) {state.authentication = false},
  }
});
export const authAction = authSlice.actions;

export default authSlice.reducer;
