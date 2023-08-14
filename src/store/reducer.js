

export default reducer = (state = initalState, action) => {
    switch(action.type) {
        case 'SET_COUNTER':
        return{...state, counter: action.payload};
        default:
            return state;
    }
}




// const counterReducer = (state = {counter: 0}, action) => { 
//     //  users adds something 
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + 1
//         }
//     }
//     // user subtracts something 
//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter - 1
//         }
//     }
//     // users multiply
//     if(action.type === 'multiply') {
//         return {
//             counter: state.counter * parseInt(action.payload)
//         }
//     }

//     // returns state with no changes 
//     return state;
// };

// const store = createStore(counterReducer);