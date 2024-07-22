import TransactionItem from '@/components/TransactionItem';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useTransactions } from '../context/TransactionContext';
import { generateMockData } from '../utils/mockData';

type Transaction = {
  id: string;
  name: string;
  amount: number;
  date: string;
  place: string;
};

type TransactionsStackParamList = {
  TransactionDetail: { transaction: Transaction };
};

type TransactionsListNavigationProp = StackNavigationProp<TransactionsStackParamList, 'TransactionDetail'>;

export default function TransactionsList() {
  const { transactions, addTransaction } = useTransactions();
  const navigation = useNavigation<TransactionsListNavigationProp>();
  const [mockDataAdded, setMockDataAdded] = useState(false);

  useEffect(() => {
    if (!mockDataAdded) {
      const mockData = generateMockData();
      mockData.forEach(transaction => {
        addTransaction(transaction);
      });
      setMockDataAdded(true);
    }
  }, [mockDataAdded, addTransaction]);

  useEffect(() => {
  }, [transactions]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Transactions List</Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TransactionItem
            transaction={item}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
