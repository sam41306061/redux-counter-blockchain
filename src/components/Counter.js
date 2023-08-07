import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch();  
  const counter = useSelector(state => state.counter);
  // state to hold user input
  const [inputValue, setInputValue] = useState('');

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };
  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  }
  const multiplyHandler = () => {
     // Convert the inputValue to a number (it comes as a string from the input field)
    const amount = parseInt(inputValue); 
    // change input value from string into a number
    dispatch({ type: 'mulitply'});
    
    // resets the input field
    setInputValue('');
    console.log(amount);
    console.log();
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button className={classes.button} onClick={incrementHandler}>Increment</button>
        <button className={classes.button} onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
       <input className={classes.input}  onChange={inputChangeHandler} value={inputValue}></input>
      <button className={classes.button} onClick={multiplyHandler}>Increase by </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

