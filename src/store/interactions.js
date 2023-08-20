import { ethers } from 'ethers';

import COUNTER_ABI from '../abis/Counter.json';

export const incrementHandler = () => {
    return async (dispatch) => {
      try {
        const increment = new ethers.Contract(COUNTER_ABI)
        dispatch({ type: 'INCREMENT_COUNTER', increment });
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const decrementHandler = () => {
    return async (dispatch) => {
      try {
        const decrement = new ethers.Contract(COUNTER_ABI);
        dispatch({ type: 'DECREMENT_COUNTER', decrement});
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const multiplyHandler = () => {
    return async (dispatch) => {
      try {
        const multiply = new ethers.Contract(COUNTER_ABI);
        dispatch({ type: 'MULTIPLY_COUNTER', multiply });
      } catch (error) {
        console.error(error);
      }
    };
  };