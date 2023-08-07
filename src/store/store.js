import { createStore } from 'redux';


const counterReducer = (state = {counter: 0}, action) => { 
    //  users adds something 
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    // user subtracts something 
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    // users multiply
    if(action.type === 'multiply') {
        return {
            counter: state.counter * action.amount
        }
    }

    // returns state with no changes 
    return state;
};

const store = createStore(counterReducer);

export default store;
