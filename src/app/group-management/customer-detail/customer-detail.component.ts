import { Component, OnInit, Input } from '@angular/core';
import {
  Customer,
  CustomerBillCycle,
  CustomerType,
} from '../../models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: Customer;
  constructor() {}

  ngOnInit() {}
}
