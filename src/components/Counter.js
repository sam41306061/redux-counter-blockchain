import { useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import classes from './Counter.module.css';

import { counterActions } from '../store/store';




const Counter = () => {
  const dispatch = useDispatch();  
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const [input, setInput] = useState('');

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const multiplyHandler = () => {
    const multiplier = parseInt(input);
    if(!isNaN(multiplier)) {
      dispatch(counterActions.multiply(multiplier.toString())); // multiplier.toString is now the payload
      setInput('');
    } else {
      console.log('Input is not validnumber')
    }
    
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show ? <div className={classes.value}>{counter}</div> : null}
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

