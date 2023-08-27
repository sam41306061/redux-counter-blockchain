import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import authReducer from './auth';
import accountsReducer from './accounts';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    accounts: accountsReducer
  },
});


export default store;
