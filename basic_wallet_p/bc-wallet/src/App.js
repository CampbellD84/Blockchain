import React, { useState } from "react";
import Form from "./Form";
import Balance from "./Balance";
import TransForm from "./TransForm";
import "./App.css";
import BCContext from "./WalletContext";
import TransactionContext from "./TransactionCtx";

function App() {
  const [state, setState] = useState({ id: "" });
  const [trstate, setTrstate] = useState({
    sender: "",
    receiver: "",
    amount: 0
  });
  return (
    <div className="App">
      <BCContext.Provider value={{ state, setState }}>
        <h1>Welcome to SimpWallet</h1>
        <h3>Please enter information.</h3>
        {state.id === "" ? <Form /> : <Balance />}
        <div>
          <TransactionContext.Provider value={{ trstate, setTrstate }}>
            <TransForm />
          </TransactionContext.Provider>
        </div>
      </BCContext.Provider>
    </div>
  );
}

export default App;
