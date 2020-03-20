import React, { useContext, useEffect } from "react";
import API from "./API";

import BCContext from "./WalletContext";

export default function Transactions() {
  const cntx = useContext(BCContext);

  const getUserTrans = (chain, id) => {
    let userTrans = [];
    for (let blk of chain) {
      let blockTrans = blk.transactions.filter(
        tran => tran.receiver === id || tran.sender === id
      );
      if (blockTrans.length > 0) {
        userTrans.push({ blockId: blk.index, blockTrans });
      }
    }
    console.log(userTrans);
    return userTrans;
  };

  const calcBalance = userTrans => {
    let amount = 0;
    let id = cntx.state.id;
    console.log(cntx.state.id);
    userTrans.forEach(blk => {
      blk.blockTrans.forEach(tran => {
        if (tran.receiver === id) {
          amount += tran.amount;
        } else {
          amount -= tran.amount;
        }
      });
    });
    amount = Math.abs(amount);
    return amount;
  };

  useEffect(() => {
    API.get("chain")
      .then(res => {
        const transactions = getUserTrans(res.data.chain, cntx.state.id);
        cntx.setState({
          ...cntx.state,
          chain: res.data.chain,
          userTrans: transactions
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {cntx.state.chain ? (
        <div>Balance: {calcBalance(cntx.state.userTrans)}</div>
      ) : (
        <p>Getting chain...</p>
      )}
    </div>
  );
}
