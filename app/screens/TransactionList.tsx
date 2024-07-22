
// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

// type TransactionsStackParamList = {
//   TransactionDetail: { transaction: Transaction };
// };

// type TransactionsListNavigationProp = StackNavigationProp<TransactionsStackParamList, 'TransactionDetail'>;

// interface Transaction {
//   id: string;
//   name: string;
//   amount: number;
//   date: string;
//   place: string;
// }

// const initialTransactions: Transaction[] = [
//   { id: '1', name: 'Groceries', amount: 50, date: '2024-07-01', place: 'hurone' },
//   { id: '2', name: 'Rent', amount: 400, date: '2024-07-09', place: 'Hamilton' },
//   { id: '3', name: 'Tim', amount: 75, date: '2024-07-06', place: 'Duntas' },
//   { id: '4', name: 'Urben planet', amount: 110, date: '2024-07-11', place: 'White oks' },
//   { id: '5', name: 'Macdonalds', amount: 95, date: '2024-07-16', place: 'Highbory' },
//   { id: '6', name: 'Gas bill', amount: 60, date: '2024-07-21', place: 'kips' },
//   { id: '7', name: 'Mobile bill', amount: 45, date: '2024-07-24', place: 'Digital' },
//   // Add more mock data
// ];

// export default function TransactionsList() {
//   const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
//   const navigation = useNavigation<TransactionsListNavigationProp>();

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerText}>Transactions List</Text>
//       </View>
//       <FlatList
//         data={transactions}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.transactionItem}
//             onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
//           >
//             <View style={styles.transactionContent}>
//               <Text style={styles.transactionName}>{item.name}</Text>
//               <Text style={styles.transactionAmount}>${item.amount.toFixed(2)}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   headerContainer: {
//     backgroundColor: '#007bff',
//     paddingVertical: 15,
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   transactionItem: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     marginHorizontal: 16,
//     marginVertical: 6,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   transactionContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   transactionName: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333',
//   },
//   transactionAmount: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#ff5252',
//   },
// });
import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTransactions } from '../context/TransactionContext';
import TransactionItem from '@/components/TransactionItem';
import { generateMockData } from '../utils/mockData';

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  date: string;
  place: string;
}



type TransactionsStackParamList = {
  TransactionDetail: { transaction: Transaction };
};

type TransactionsListNavigationProp = StackNavigationProp<TransactionsStackParamList, 'TransactionDetail'>;

export default function TransactionsList() {
  const { transactions, addTransaction } = useTransactions();
  const navigation = useNavigation<TransactionsListNavigationProp>();

  useEffect(() => {
    generateMockData().forEach(addTransaction);
  }, []);

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
