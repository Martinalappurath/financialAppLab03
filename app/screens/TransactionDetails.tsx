import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Transaction } from '../context/TransactionContext';

type TransactionsStackParamList = {
  TransactionDetail: { transaction: Transaction };
};

type TransactionDetailRouteProp = RouteProp<TransactionsStackParamList, 'TransactionDetail'>;

export default function TransactionDetail({ route }: { route: TransactionDetailRouteProp }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.transactionContainer}>
        <Text style={styles.transactionName}>{transaction.name}</Text>
        <Text style={styles.transactionAmount}>${transaction.amount.toFixed(2)}</Text>
        <Text style={styles.transactionLocation}>Location: {transaction.place}</Text>
      </View>
      <Text style={styles.transactionDate}>Date: {transaction.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  transactionContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  transactionName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  transactionAmount: {
    fontSize: 16,
    color: '#ff5252',
    marginBottom: 4,
  },
  transactionLocation: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 16,
    color: '#555',
  },
});
