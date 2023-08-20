import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';



const Counter = () => {
  const dispatch = useDispatch();  
  const counter = useSelector(state => state.counter);
  // state to hold user input
  const show = useSelector(state => state.showCounter)

  const [input, setInput] = useState('');

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };
  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };
  const multiplyHandler = () => {
     // Convert the inputValue to a number (it comes as a string from the input field)
    const multiplier = parseInt(input); 
    // change input value from string into a number
    if (!isNaN(multiplier)) {
      dispatch({ type: 'multiply', payload: multiplier.toString() });
      // resets the input field
      setInput('');
    } else {
      // Handle the case where the input is not a valid number
      console.log('Input is not a valid number');
    }
    console.log(input)
  }
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
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

