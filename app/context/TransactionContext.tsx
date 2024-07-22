import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  date: string;
  place: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export function TransactionProvider({ children }: { children: ReactNode }) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
  
    const addTransaction = (transaction: Transaction) => {
      setTransactions((prev) => [...prev, transaction]);
    };
  
    return (
      <TransactionContext.Provider value={{ transactions, addTransaction }}>
        {children}
      </TransactionContext.Provider>
    );
  }
  
  export function useTransactions() {
    const context = useContext(TransactionContext);
    if (!context) {
      throw new Error('useTransactions must be used within a TransactionProvider');
    }
    return context;
  }
