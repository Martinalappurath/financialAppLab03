
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


interface Transaction {
  id: string;
  name: string;
  amount: number;
  date: string;
  place: string;
}

const transactions: Transaction[] = [
  { id: '1', name: 'Groceries', amount: 50, date: '2024-07-01', place: 'hurone' },
  { id: '2', name: 'Rent', amount: 400, date: '2024-07-09', place: 'Hamilton' },
  { id: '3', name: 'Tim', amount: 75, date: '2024-07-06', place: 'Duntas' },
  { id: '4', name: 'Urben planet', amount: 110, date: '2024-07-11', place: 'White oks' },
  { id: '5', name: 'Macdonalds', amount: 95, date: '2024-07-16', place: 'Highbory' },
  { id: '6', name: 'Gas bill', amount: 60, date: '2024-07-21', place: 'kips' },
  { id: '7', name: 'Mobile bill', amount: 45, date: '2024-07-24', place: 'Digital' },
];

const Summary = () => {
  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalTransactions = transactions.length;
  const balance = 500; // Fixed balance

  const highestSpendingTransaction = transactions.reduce((prev, current) => (prev.amount > current.amount ? prev : current));
  const lowestSpendingTransaction = transactions.reduce((prev, current) => (prev.amount < current.amount ? prev : current));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Summary</Text>
      <View style={styles.item}>
        <Text style={styles.info}>Total Transactions: {totalTransactions}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.info}>Total Expenses: ${totalExpenses.toFixed(2)}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.info}>Balance: ${balance.toFixed(2)}</Text>
      </View>
      <View style={[styles.item, styles.spendingContainer]}>
        <Text style={[styles.info, styles.highestSpendingTitle]}>Highest Spending:</Text>
        <View style={styles.transactionContainer}>
          <Text style={styles.transactionName}>{highestSpendingTransaction.name}</Text>
          <Text style={styles.transactionAmount}>${highestSpendingTransaction.amount.toFixed(2)}</Text>
        </View>
      </View>
      <View style={[styles.item, styles.spendingContainer]}>
        <Text style={[styles.info, styles.lowestSpendingTitle]}>Lowest Spending:</Text>
        <View style={styles.transactionContainer}>
          <Text style={styles.transactionName}>{lowestSpendingTransaction.name}</Text>
          <Text style={styles.transactionAmount}>${lowestSpendingTransaction.amount.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 40,
    padding: 40
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
    textAlign: 'center',
  },
  spendingContainer: {
    marginBottom: 10,
  },
  highestSpendingTitle: {
    color: 'red',
  },
  lowestSpendingTitle: {
    color: 'blue',
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  transactionName: {
    fontSize: 16,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#333',
  },
});

export default Summary;
