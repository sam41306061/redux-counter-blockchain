import { useState, useEffect } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import classes from './Counter.module.css';

import { counterActions } from '../store/counter';
import { fetchCounter, incrementCounter, decrementCounter, multiplyCounter } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();  
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const loading = useSelector((state) => state.counter.loading);
  const error = useSelector((state) => state.counter.error);


  const [input, setInput] = useState('');

  const incrementHandler = () => {
    dispatch(incrementCounter());
  };
  const decrementHandler = () => {
    dispatch(decrementCounter());
  };
  const multiplyHandler = () => {
    const inputValue = parseFloat(input);
    if(!isNaN(inputValue)) {
      dispatch(multiplyCounter(inputValue));
      setInput('');
    } else {
      console.log('Input is not a valid number')
    }
   };
    

  //   const multiplier = parseInt(input);
  //   if(!isNaN(multiplier)) {
  //     dispatch(counterActions.multiply(multiplier.toString())); // multiplier.toString is now the payload
  //     setInput('');
  //   } else {
  //     console.log('Input is not validnumber')
  //   }
    
  // }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const errorLoadingHanlder = () => {
    if(error){
      return `Something broke down here: ${error}`;
    } else {
      return `Loading blockchain data`;
    }
  }

useEffect(() => {
  dispatch(fetchCounter());
}, [dispatch])

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show ? <div className={classes.value}>{counter.toString()}</div> : null}
      <div>
        <button className={classes.button} onClick={incrementHandler}>Increment</button>
        <button className={classes.button} onClick={decrementHandler}>Decrement</button>
      </div>
      <div onChange={errorLoadingHanlder}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
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

