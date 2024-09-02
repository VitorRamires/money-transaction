import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Transactions } from "./pages/Transactions";
import { TransactionContextProvider } from "./context/transactionContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionContextProvider>
        <Transactions />
      </TransactionContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
