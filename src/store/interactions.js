import { ethers } from 'ethers';

import COUNTER_ABI from '../abis/Counter.json';

export const incrementHandler = () => {
    return async (dispatch) => {
      try {
        const increment = new ethers.Contract(address, COUNTER_ABI)
        dispatch({ type: 'INCREMENT_COUNTER', increment });
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const decrementHandler = () => {
    return async (dispatch) => {
      try {
        await contract.methods.decrement().send({ address, COUNTER_ABI });
        dispatch({ type: 'DECREMENT_COUNTER' });
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const multiplyHandler = (factor) => {
    return async (dispatch) => {
      try {
        await contract.methods.multiply(factor).send({ address, COUNTER_ABI });
        dispatch({ type: 'MULTIPLY_COUNTER' });
      } catch (error) {
        console.error(error);
      }
    };
  };