import { Order } from '../models/order';

export const ORDERS: Order[] = [
  {
    orderId: 1,
    groupId: 1,
    customerId: null,
    offerId: 1,
    purchaseTime: '2023-03-05',
  },
  {
    orderId: 2,
    groupId: null,
    customerId: 1,
    offerId: 2,
    purchaseTime: '2023-03-23',
  },
  {
    orderId: 3,
    groupId: 3,
    customerId: null,
    offerId: 3,
    purchaseTime: '2023-03-24',
  },
  {
    orderId: 4,
    groupId: null,
    customerId: 3,
    offerId: 4,
    purchaseTime: '2023-03-26',
  },
  {
    orderId: 5,
    groupId: null,
    customerId: 10,
    offerId: 5,
    purchaseTime: '2023-03-14',
  },
  {
    orderId: 6,
    groupId: null,
    customerId: 8,
    offerId: 6,
    purchaseTime: '2023-03-30',
  },
];

export const OPTIONS = [
  {
    name: 'select type',
    value: 0,
  },
  {
    name: 'group',
    value: 1,
  },
  {
    name: 'customer',
    value: 2,
  },
];
