import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch();  
  const counter = useSelector(state => state.counter);
  const [inputElement, setInputValue] = useState('');

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({type: 'increment', amount: 5});
    // if(inputElement) {
      
    // }
   
  };
  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };
  // const inputChangeHandler = (event) =>{
  //   setInputValue(event.target.value);
  // }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button className={classes.button} onClick={incrementHandler}>Increment</button>
        <button className={classes.button} onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
       <input className={classes.input} value={inputElement} ></input>
      <button className={classes.button} onClick={incrementHandler}>Increase by </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

