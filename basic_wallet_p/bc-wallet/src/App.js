import React from "react";
import TransactionForm from "./TransactionForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to SimpWallet</h1>
      <h3>Please enter information to make a transaction.</h3>
      <TransactionForm />
    </div>
  );
}

export default App;
