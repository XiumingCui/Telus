export class Customer {
  customerId: number;
  customerBillCycle: CustomerBillCycle;
  customerType: CustomerType;
}
export enum CustomerBillCycle {
  biweekly = 'biweekly',
  month = 'month',
  year = 'year',
}
export enum CustomerType {
  Consumer = 'Consumer',
  Business = 'Business',
}
