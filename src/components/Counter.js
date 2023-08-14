import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

import { incrementHandler, decrementHandler, multiplyHandler } from '../store/interactions';

const Counter = () => {
  const dispatch = useDispatch();  
  const counter = useSelector(state => state.counter);
  // state to hold user input
  const [input, setInput] = useState('');

  const toggleCounterHandler = () => {};

  


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button className={classes.button} onClick={incrementHandler}>Increment</button>
        <button className={classes.button} onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
       <input className={classes.input} type="number" value={input} onChange={event => setInput(event.target.value)}></input>
      <button className={classes.button} onClick={multiplyHandler}>Increase by </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

