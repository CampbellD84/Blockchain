import React, { useContext, useState } from "react";
import BCContext from "./WalletContext";

export default function Form() {
  const [input, setInput] = useState("");
  const cntx = useContext(BCContext);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    cntx.setState({
      ...cntx.state,
      id: input
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" value={input} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
