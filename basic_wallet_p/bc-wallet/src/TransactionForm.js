import React, { useState } from "react";

const TransactionForm = () => {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState(0);

  const submit = e => {
    e.preventDefault();
    fetch(`http://localhost:5000/transactions/new`, {
      method: "POST",
      body: JSON.stringify({ sender, receiver, amount }).then()
    });
  };
  return (
    <form onSubmit={e => submit(e)}>
      <label>
        Sender:
        <input
          type="text"
          name="sender"
          value={sender}
          onChange={e => setSender(e.target.value)}
        />
      </label>
      <label>
        Receiver:
        <input
          type="text"
          name="receiver"
          value={receiver}
          onChange={e => setReceiver(e.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default TransactionForm;
