import { TransactionContext } from "../context/transactionContext";
import { useContext } from "react";

export function useSummary(){

  const { transactions } = useContext(TransactionContext);

  let sumSummary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "entrada") {
        acc.incoming += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcoming += transaction.price;
        acc.total -= transaction.price;
      }
      return acc;
    },
    {
      incoming: 0,
      outcoming: 0,
      total: 0,
    }
  );

  return sumSummary  

}