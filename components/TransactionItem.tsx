import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Transaction } from '../app/context/TransactionContext';

interface TransactionItemProps {
    transaction: {
      id: string;
      name: string;
      amount: number;
      date: string;
      place: string;
    };
    onPress: () => void;
  }

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onPress }) => (
  <TouchableOpacity style={styles.transactionItem} onPress={onPress}>
    <View style={styles.transactionContent}>
      <Text style={styles.transactionName}>{transaction.name}</Text>
      <Text style={styles.transactionAmount}>${transaction.amount.toFixed(2)}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  transactionItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  transactionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ff5252',
  },
});

export default TransactionItem;
