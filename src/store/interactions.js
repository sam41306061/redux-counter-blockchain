
import { ethers } from 'ethers';
import COUNTER_ABI from '../abis/Counter.json';

export const getCounter =  async(dispatch) => {
    const connection = new ethers.providers.Web3Provider(window.entherum);
    dispatch({ type: 'SET_COUNTER'});

    return connection;
}

// export const getCounter = () => async (dispatch) => {
//     const counter = await contract.methods.getCounter().call();
//     dispatch({ type: 'SET_COUNTER', payload: counter });
//   };
  
  export const incrementCounter = () => async (dispatch) => {
    await ethers.Contract.increment().send({ from: COUNTER_ABI });
    dispatch(getCounter());
  };
  
  export const decrementCounter = () => async (dispatch) => {
    await ethers.Contract.decrement().send({ from: COUNTER_ABI });
    dispatch(getCounter());
  };
  
  export const multiplyCounter = (factor) => async (dispatch) => {
    await ethers.Contract.multiply(factor).send({ from: COUNTER_ABI });
    dispatch(getCounter());
  };
  