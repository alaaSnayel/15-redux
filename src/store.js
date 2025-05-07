import { createStore, combineReducers } from "redux";

import accountReducer from "./featurer/accounts/accountSlice";
import customerReducer from "./featurer/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

export default store;
