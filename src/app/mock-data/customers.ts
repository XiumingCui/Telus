import { Customer, CustomerBillCycle, CustomerType } from '../models/customer';

export const CUSTOMERS: Customer[] = [
  {
    customerId: 1,
    customerBillCycle: CustomerBillCycle.month,
    customerType: CustomerType.Consumer,
  },
  {
    customerId: 2,
    customerBillCycle: CustomerBillCycle.year,
    customerType: CustomerType.Consumer,
  },
  {
    customerId: 3,
    customerBillCycle: CustomerBillCycle.biweekly,
    customerType: CustomerType.Business,
  },
  {
    customerId: 4,
    customerBillCycle: CustomerBillCycle.month,
    customerType: CustomerType.Business,
  },
  {
    customerId: 5,
    customerBillCycle: CustomerBillCycle.year,
    customerType: CustomerType.Consumer,
  },
  {
    customerId: 6,
    customerBillCycle: CustomerBillCycle.month,
    customerType: CustomerType.Consumer,
  },
  {
    customerId: 7,
    customerBillCycle: CustomerBillCycle.year,
    customerType: CustomerType.Consumer,
  },
  {
    customerId: 8,
    customerBillCycle: CustomerBillCycle.biweekly,
    customerType: CustomerType.Business,
  },
  {
    customerId: 9,
    customerBillCycle: CustomerBillCycle.biweekly,
    customerType: CustomerType.Business,
  },
  {
    customerId: 10,
    customerBillCycle: CustomerBillCycle.year,
    customerType: CustomerType.Consumer,
  },
];
