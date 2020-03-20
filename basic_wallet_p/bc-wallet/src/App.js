import React, { useState } from "react";
import Form from "./Form";
import Transactions from "./Transactions";
import "./App.css";
import BCContext from "./WalletContext";

function App() {
  const [state, setState] = useState({ id: "" });

  return (
    <div className="App">
      <BCContext.Provider value={{ state, setState }}>
        <h1>Welcome to SimpWallet</h1>
        <h3>Please enter information.</h3>
        {state.id === "" ? <Form /> : <Transactions />}
      </BCContext.Provider>
    </div>
  );
}

export default App;
