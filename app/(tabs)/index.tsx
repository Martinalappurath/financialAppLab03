
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

interface Transaction {
  id: string;
  name: string;
  amount: number;
  date: string;
  place: string;
}

type TransactionsStackParamList = {
  TransactionsList: undefined;
  TransactionDetail: { transaction: Transaction };
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<TransactionsStackParamList>();

function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsList} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetails} />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof MaterialCommunityIcons.glyphMap;

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

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Transactions" component={TransactionsStack} options={{ headerShown: false }} />
        <Tab.Screen name="Summary" component={Summary} options={{ headerShown: false }} />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <TransactionProvider>
      <StatusBar style="auto" />
      <MainNavigator />
    </TransactionProvider>
  );
}
