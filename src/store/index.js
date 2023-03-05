// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialCounterState = {counter:0, showCounter:true}
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {state.counter++},
    decrement(state) {state.counter--},
    increase(state, action) {state.counter = state.counter + action.payload},
    decrease(state, action) {state.counter = state.counter - action.payload},
    toggler(state) {state.showCounter = !state.showCounter}
  }
});

const initialAuthState = {authentication: false}

const authSlice = createSlice({
  name:'Authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {state.authentication = true},
    logout(state) {state.authentication = false},
  }
});

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;