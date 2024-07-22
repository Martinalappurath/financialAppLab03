import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the Transaction interface to specify the structure of transaction data
export interface Transaction {
  id: string;
  name: string;
  amount: number;
  date: string;
  place: string;
}

// Define the shape of the context data, including an array of transactions and a function to add a transaction
interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

// Create the Transaction context with an initial undefined value
const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

// Define the TransactionProvider component to manage the transactions state and provide context to its children
export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Define the addTransaction function to add a new transaction to the state
  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    // Provide the transactions state and addTransaction function to the context
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

// Define a custom hook to use the Transaction context
export function useTransactions() {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactions must be used within a TransactionProvider');
  }
  return context;
}
