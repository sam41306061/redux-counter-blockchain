import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { ethers } from "ethers";

const initalAccountsState = {
    connection: null,
    chainId: null,
    account: null,
    balance: null
}

export const loadProvider = createAsyncThunk(
    'accounts/loadProvider',
    async() => {
        const connection = new ethers.providers.Web3Provider(window.ethereum)
        return connection;
    }
);

export const loadNetwork = createAsyncThunk(
    'accounts/loadNetwork',
    async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await provider.getNetwork();
        return network;
    }
)

export const loadAccount = createAsyncThunk(
    'accounts/loadAccount',
    async() => {
        const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
        return account[0];
    }
);

export const loadBalance = createAsyncThunk(
    'accounts/loadBalance',
    async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        const balance = await provider.getBalance(account);
        return balance;
    }
)



const accountsSlice = createSlice({
    name: 'accounts',
    initialState: initalAccountsState,
    reducers: {
        providerLoaded(state,action) {
          state.connection = action.payload.connection;
        },
        networkLoaded(state,action) {
            state.chainId = action.payload.chainId;
        },
        accountLoaded(state,action) {
            state.account = action.payload.account;
        },
        ethersBalanceLoaded(state,action){
            state.balance = action.payload.balance;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadProvider.fulfilled, (state,action) => {
            state.connection = action.payload
        });
        builder.addCase(loadNetwork.fulfilled, (state,action) =>{
            state.chainId = action.payload
        })
        builder.addCase(loadAccount.fulfilled, (state,action) => { 
            state.account = action.payload
        });
        builder.addCase(loadBalance.fulfilled, (state, action) =>{
            state.balance = action.payload
        })
    }
});

export const accountActions = accountsSlice.actions;

export default accountsSlice.reducer;