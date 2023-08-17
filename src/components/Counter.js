import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

import { ethers } from 'ethers';
import { incrementHandler, decrementHandler, multiplyHandler } from '../store/interactions';
import { counterSlice } from '../store/store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  // state to hold user input
  const [input, setInput] = useState('');

  const toggleCounterHandler = () => {};

  // connect wallet set up
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const connectWallet = async () => {
    try {
      const { ethers } = window;
      if (typeof window.ethers === 'undefined') {
        alert('Please Install MetaMask in chrome');
      }
      const accounts = await ethers.request({
        method: 'eth_requestAccounts',
      });
      console.log('Connected', accounts[0], signer);
    } catch (error) {
      console.log('Could not connect to your wallet', error);
    }
  };

  useEffect(() => {
    // Access the current wallet address
    async function getWalletAddress() {
      try {
        const address = await signer.getAddress();
        console.log('Connected wallet address:', address);
      } catch (error) {
        console.log('Could not connect to your wallet', error);
      }
    }

    getWalletAddress();
  }, []);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button className={classes.button} onClick={connectWallet}>
          Connect wallet
        </button>
      </div>
      <div>
        <button className={classes.button} onClick={() => dispatch(incrementHandler())}>
          Increment
        </button>
        <button className={classes.button} onClick={() => dispatch(decrementHandler())}>
          Decrement
        </button>
      </div>
      <div>
        <input
          className={classes.input}
          type="number"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
        <button className={classes.button} onClick={() => dispatch(multiplyHandler(input))}>
          Increase by
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
