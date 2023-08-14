import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

// actions
import { getCounter, incrementCounter, decrementCounter, multiplyCounter } from '../store/interactions';



const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  // state to hold user input
  const [input, setInput] = useState('');

  useEffect(() =>{
    dispatch(getCounter());
  }, []);
  


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button className={classes.button} onClick={incrementCounter}>Increment</button>
        <button className={classes.button} onClick={decrementCounter}>Decrement</button>
      </div>
      <div>
       <input className={classes.input} type="number" value={input} onChange={event => setInput(event.target.value)}></input>
      <button className={classes.button} onClick={multiplyCounter}>Increase by </button>
      </div>
      <button onClick={'#'}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

