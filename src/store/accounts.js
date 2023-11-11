import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { ethers } from "ethers";
//import COUNTER from '../abis/Counter.json';

const initalAccountsState = {
    connection: null,
    chainId: null,
    account: null,
    balance: null
}

export const loadProvider = createAsyncThunk('accounts/loadProvider', async () => {
    const connection = new ethers.providers.Web3Provider(window.ethereum);
    return connection;
  });
  

// Thunk to load network
export const loadNetwork = createAsyncThunk('accounts/loadNetwork', async (_, { getState }) => {
    const provider = getState().accounts.connection;
    const { chainId } = await provider.getNetwork();
    return chainId;
  });

// Thunk to load account
export const loadAccount = createAsyncThunk('accounts/loadAccount', async (_, { getState }) => {
    const provider = getState().accounts.connection;
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0]);
  
    let balance = await provider.getBalance(account);
    balance = ethers.utils.formatEther(balance);
  
    return { account, balance };
  });



const accountsSlice = createSlice({
    name: 'accounts',
    initialState: initalAccountsState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(loadProvider.fulfilled, (state, action) => {
            state.connection = action.payload;
          })
          .addCase(loadNetwork.fulfilled, (state, action) => {
            state.chainId = action.payload;
          })
          .addCase(loadAccount.fulfilled, (state, action) => {
            state.account = action.payload.account;
            state.balance = action.payload.balance;
          })
    }
});
// Export the actions and reducer
export const { reducer } = accountsSlice;
