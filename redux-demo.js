// // const redux = require('redux');

// // // reducer
// // const counterReducer = (state = { counter: 0 }, action) => {
// //     return {
// //       counter: state.counter + 1 
// //     }
// // };

// // const store = redux.createStore(counterReducer);

// // console.log(store.getState());

// // const counterSubscriber = () =>{
// //     const lastState = store.getState();
// //     console.log(lastState);
// // }

// // store.subscribe(counterSubscriber);

// // store.dispatch({ type: 'increment:'});
//  const redux = require('redux');

//  const store = redux.createStore(counterReducer);
// function counterReducer(state = { counter: 0 }, action) {
//     if (action.type === "incremented") {
//       return {
//         counter: state.counter + 1,
//       };
//     }
//     return state;
//   }

//   counter = store.getState();

//   store.subscribe(() => console.log(store.getState()));

//   store.dispatch({ type: 'counter/incremented'});
//     // {value: 1}
//   store.dispatch({ type: 'counter/incremented'});
//     // {value: 2}
//   store.dispatch({ type: 'counter/incremented'});
//     // {value: 3}
 