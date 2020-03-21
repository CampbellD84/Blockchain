import React, { useContext, useEffect, useState } from "react";
import API from "./API";
import TransactionContext from "./TransactionCtx";

export default function TransForm() {
  const [trinput, setTrinput] = useState({});
  const trctx = useContext(TransactionContext);

  const handleChange = e => {
    setTrinput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    trctx.setTrstate({
      ...trctx.trstate,
      sender: trinput.sender,
      receiver: trinput.receiver,
      amount: trinput.amount
    });
  };

  useEffect(() => {
    API.post("transactions/new", trctx.trstate)
      .then(res => console.log(res.data.message))
      .catch(err => console.log(err.message));
  }, [trctx]);

  return (
    <div>
      <h3>Create a transaction.</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Sender:
          <input
            type="text"
            name="sender"
            value={trinput.sender}
            onChange={handleChange}
          />
        </label>
        <label>
          Receiver:
          <input
            type="text"
            name="receiver"
            value={trinput.receiver}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={trinput.amount}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create Transaction</button>
      </form>
    </div>
  );
}
