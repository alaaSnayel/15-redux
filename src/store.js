import { createStore, combineReducers } from "redux";

const customerInitialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: new Date().toISOString(),
      };
    case "account/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(fullName) {
  return {
    type: "account/updateName",
    payload: fullName,
  };
}

const AccountInitalState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function accountReducer(state = AccountInitalState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "account/payloan":
      if (state.loan <= 0) return state;
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 100 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 5000, purpose: "By Car" },
// });
// console.log(store.getState());
// store.dispatch({ type: "account/payloan" });

// console.log(store.getState());

function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}

function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

function payloan() {
  return {
    type: "account/payloan",
  };
}

store.dispatch(createCustomer("John Doe", "123456789"));
store.dispatch(updateName("Alaa"));
store.dispatch(deposit(500));
store.dispatch(withdraw(100));
store.dispatch(requestLoan(1000, "Buy a car"));
store.dispatch(payloan());
console.log(store.getState());

export { store, deposit, withdraw, requestLoan, payloan };
