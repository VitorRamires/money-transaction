import { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header/header";
import { PriceHighlight } from "../components/Header/style";
import { SearchForm } from "../components/SearchForm/SearchForm";
import { Summary } from "../components/Summary/Summary";
import { TransactionContainer, TransactionTable } from "./style";
import { TransactionContext } from "../context/transactionContext";
import { formatterDate, formatterPrice } from "../formatter/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variantColor={transaction.type}>
                      {transaction.type === "saida" && " - "}
                      {formatterPrice.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {formatterDate.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
