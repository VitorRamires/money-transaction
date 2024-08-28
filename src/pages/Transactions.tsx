import { Header } from "../components/Header/header";
import { PriceHighlight } from "../components/Header/style";
import { Summary } from "../components/Summary/Summary";
import { TransactionContainer, TransactionTable } from "./style";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variantColor="entrada">R$ 12.500</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variantColor="saida">- R$ 59,50</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
