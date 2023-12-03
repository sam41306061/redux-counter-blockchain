import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import COUNTER_ABI from '../abis/Counter.json'
import { ethers } from "ethers";


const initialCounterState = { counter: 0, showCounter: true, error: null };
const singerWallet = '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d';
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(contractAddress, COUNTER_ABI, provider);


// managing transactions in contract
export const fetchCounter = createAsyncThunk('counter/fetchCounter', async () => {
  const counter = await contract.getCounter();
  return counter;
 });


 export const incrementCounter = createAsyncThunk('counter/incrementCounter', async() => { 
  const signer = new ethers.Wallet(singerWallet, provider);
  const contractWS = contract.connect(signer);
  const tx = await contractWS.increment();
  await tx.wait();
  const counter = await contractWS.getCounter();
  return counter;
 });

 export const decrementCounter = createAsyncThunk('counter/decrementCounter', async() => {
  const signer = new ethers.Wallet(singerWallet, provider);
  const contractWS = contract.connect(signer);
  const tx = await contractWS.decrement();
  await tx.wait();
  const counter = await contractWS.getCounter(); 
  return counter;
 });

 export const multiplyCounter = createAsyncThunk('counter/multiplyCounter', async (multiply) => {
  try {
    const signer = new ethers.Wallet(singerWallet, provider);
    const contractWS = contract.connect(signer);
    const bigMultiply = ethers.BigNumber.from(multiply);
    const tx = await contractWS.multiply(bigMultiply);
    await tx.wait();
    const counter = await contractWS.getCounter(); 
    return counter;
  } catch(error) {
    console.error('Error in multiplyCounter:', error);
    throw error;
  }
 });
 
 
 
 

const counterSlice = createSlice({
  name: "counter",
  initialState:initialCounterState,
  reducers: {
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  },
  extraReducers: (builder) => {
    builder
     .addCase(fetchCounter.pending, (state) => {
       state.loading = true;
     })
     .addCase(fetchCounter.fulfilled, (state, action) => {
       state.loading = false;
       state.counter = action.payload;
     })
     .addCase(fetchCounter.rejected, (state, action) => {
       state.loading = false;
       state.error = action.error.message;
     })
     .addCase(incrementCounter.pending, (state) => {
      state.loading = true;
    })
    .addCase(incrementCounter.fulfilled, (state, action) => {
      state.loading = false;
      state.counter = action.payload;
    })
    .addCase(incrementCounter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    .addCase(decrementCounter.pending, (state) => {
      state.loading = true;
    })
    .addCase(decrementCounter.fulfilled, (state, action) => {
      state.loading = false;
      state.counter = action.payload;
    })
    .addCase(decrementCounter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    .addCase(multiplyCounter.pending, (state) => {
      state.loading = true;
    })
    .addCase(multiplyCounter.fulfilled, (state, action) => {
      state.loading = false;
      state.counter =  action.payload;
    })
    .addCase(multiplyCounter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
