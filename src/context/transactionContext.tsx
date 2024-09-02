import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { ReactNode } from "react";
import { api } from "../axios/axios";

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

interface CreateTransactionData {
  description: string;
  type: "entrada" | "saida";
  price: number;
  category: string;
}

// interface para o Contexto a outro componente
interface TransactionTypes {
  transactions: TransactionInfo[];
  loadApiTransactions: (searchInput?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionData) => Promise<void>;
}

interface ChildrenProps {
  children: ReactNode;
}

export function TransactionContextProvider({ children }: ChildrenProps) {
  const [transactions, setTransactions] = useState<TransactionInfo[]>([]);

  async function loadApiTransactions(searchInput?: string) {
    //Utilizando axios
    const response = await api.get("/transactions", {
      params: {
        q: searchInput,
      },
    });
    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionData) {
    const response = await api.post("transactions", {
      description: data.description,
      price: data.price,
      category: data.category,
      type: data.type,
      createdAt: new Date(),
    });
    setTransactions((state) => [...state, response.data]);
    console.log(transactions)
  }

  useEffect(() => {
    loadApiTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, loadApiTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
