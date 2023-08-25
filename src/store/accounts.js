import { createSlice} from "@reduxjs/toolkit";

const initalAccountsState = {
    connection: null,
    chainId: null,
    account: null,
    balance: null
}

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
    }
});

export const accountActions = accountsSlice.actions;

export default accountsSlice.reducer;