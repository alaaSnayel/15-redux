// Store with slices

import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import accountReducer from "./featurer/accounts/accountSlice";
import customerReducer from "./featurer/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
