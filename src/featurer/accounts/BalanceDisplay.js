import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  //in old way we add {balance} as a prop
  const balance = useSelector((store) => store.account.balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;

//old way of connecting to redux store

// function mapStateToProps(state) {
//   return {
//     balance: state.account.balance,
//   };
// }

// export default connect(mapStateToProps)(BalanceDisplay);
