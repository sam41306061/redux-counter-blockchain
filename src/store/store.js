import { createStore } from 'redux';


const counterReducer = (state = {counter: 0}, action) => { 
    //  users adds something 
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    // user subtracts something 
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    // users multiply
    if(action.type === 'multiply') {
        return {
            counter: state.counter * parseInt(action.payload),
            showCounter: state.showCounter
        }
    }
    if(action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
        
    }

    // returns state with no changes 
    return state;
};

const store = createStore(counterReducer);

export default store;
