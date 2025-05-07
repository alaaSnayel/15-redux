import CreateCustomer from "./featurer/customers/CreateCustomer";
import Customer from "./featurer/customers/CreateCustomer";
import AccountOperations from "./featurer/accounts/AccountOperations";
import BalanceDisplay from "./featurer/accounts/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
