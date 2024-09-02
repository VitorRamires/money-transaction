import { createContext, useState, useEffect } from "react";
import { ReactNode } from "react";

export const TransactionContext = createContext({} as TransactionTypes);

// inteface para tipagem direta do estado
interface TransactionInfo {
  id: number;
  description: string;
  type: "entrada" | "saida";
  price: number;
  category: string;
  createdAt: string;
}

// interface para o Contexto a outro componente
interface TransactionTypes {
  transactions: TransactionInfo[];
  loadApiTransactions: (searchInput?: string) => Promise<void>;
}

interface ChildrenProps {
  children: ReactNode;
}

export function TransactionContextProvider({ children }: ChildrenProps) {
  const [transactions, setTransactions] = useState<TransactionInfo[]>([]);

  async function loadApiTransactions(searchInput?: string) {
    const url = new URL("http://localhost:3000/transactions");

    if (searchInput) {
      url.searchParams.append("q", searchInput);
    }

    const response = await fetch(url);
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadApiTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, loadApiTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
