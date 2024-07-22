import { Transaction } from '../context/TransactionContext';

export const generateMockData = (): Transaction[] => [
  { id: '1', name: 'Groceries', amount: 50, date: '2024-07-01', place: 'hurone' },
  { id: '2', name: 'Rent', amount: 400, date: '2024-07-09', place: 'Hamilton' },
  { id: '3', name: 'Tim', amount: 75, date: '2024-07-06', place: 'Duntas' },
  { id: '4', name: 'Urben planet', amount: 110, date: '2024-07-11', place: 'White oks' },
  { id: '5', name: 'Macdonalds', amount: 95, date: '2024-07-16', place: 'Highbory' },
  { id: '6', name: 'Gas bill', amount: 60, date: '2024-07-21', place: 'kips' },
  { id: '7', name: 'Mobile bill', amount: 45, date: '2024-07-24', place: 'Digital' },
];
