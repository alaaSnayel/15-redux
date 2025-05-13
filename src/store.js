// Store with Redux Toolkit

import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./featurer/accounts/accountSlice";
import customerReducer from "./featurer/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
