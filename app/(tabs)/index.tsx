import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Summary from '../screens/Summary';
import TransactionDetails from '../screens/TransactionDetails';
import TransactionsList from '../screens/TransactionList';
import { TransactionProvider } from '../context/TransactionContext';

// Define the Transaction interface to specify the structure of transaction data
interface Transaction {
  id: string;
  name: string;
  amount: number;
  date: string;
  place: string;
}

// Define the type for the parameters used in the transactions stack navigator
type TransactionsStackParamList = {
  TransactionsList: undefined;
  TransactionDetail: { transaction: Transaction };
};

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();
// Create the stack navigator for transactions
const Stack = createStackNavigator<TransactionsStackParamList>();

// Define the TransactionsStack function that returns a stack navigator for the transactions tab
function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsList} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetails} />
    </Stack.Navigator>
  );
}

// Define the main navigator function that sets up the bottom tab navigator with two tabs: Transactions and Summary
function MainNavigator() {
  return (
    <Tab.Navigator
      // Set up screen options to customize the tab bar icons based on the route name
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof MaterialCommunityIcons.glyphMap;

          // Determine the icon name based on the route name
          switch (route.name) {
            case 'Transactions':
              iconName = 'currency-usd';
              break;
            case 'Summary':
              iconName = 'credit-card';
              break;
            default:
              iconName = 'help-circle';
          }

          // Return the appropriate icon component
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* Define the Transactions tab with the TransactionsStack navigator */}
      <Tab.Screen name="Transactions" component={TransactionsStack} options={{ headerShown: false }} />
      {/* Define the Summary tab with the Summary component */}
      <Tab.Screen name="Summary" component={Summary} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

// Define the main App component that wraps the MainNavigator with the TransactionProvider
export default function App() {
  return (
    <TransactionProvider>
      <StatusBar style="auto" />
      <MainNavigator />
    </TransactionProvider>
  );
}
