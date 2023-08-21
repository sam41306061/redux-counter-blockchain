import {createSlice, configureStore} from '@reduxjs/toolkit';

// inital state
const initalState = { counter: 0, showCounter: true}

const conunterSlice = createSlice({
    name: 'counter',
    initalState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        multiply(state, action) {
            state.counter * parseInt(action.payload);
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

const store = configureStore({
    reducer: conunterSlice.reducer
});

export const counterActions = conunterSlice.actions

export default store;
