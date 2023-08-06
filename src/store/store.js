import { createStore } from 'redux';


const counterReducer = (state = {counter: 0}, action) => { 
    //  users adds something 
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    //increase by user input 
    if(action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
        };
    }

    // user subtracts something 
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    // user adds ammount to async (multiply)
    // if(action.type === 'async') {
    //     state.a
    // }
    // returns state with no changes 
    return state;
};


const store = createStore(counterReducer);

export default store;
