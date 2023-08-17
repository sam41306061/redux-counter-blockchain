import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './reducers';
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      multiply: (state, action) => {
        state.value *= action.payload;
      },
    },
  });

  export const { increment, decrement, multiply } = counterSlice.actions;

const store = createStore(counterReducer, applyMiddleware(thunk));

export default {store, counterSlice.reducers};
