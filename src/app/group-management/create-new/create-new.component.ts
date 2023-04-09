import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  Customer,
  CustomerBillCycle,
  CustomerType,
} from '../../models/customer';
import { Group } from '../../models/group';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css'],
})
export class CreateNewComponent implements OnInit {
  // public Customer = Customer;
  customerBillCycle = CustomerBillCycle;
  public customerBillCycleEnums = Object.keys(this.customerBillCycle);
  customerType = CustomerType;
  public customerTypeEnums = Object.keys(this.customerType);

  newCustomer = this.fb.group({
    customerId: [],
    customerBillCycle: [],
    customerType: [],
  });

  constructor(
    public dialogRef: MatDialogRef<CreateNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    console.log(data);
  }
  ngOnInit() {}

  onCustomerSubmit() {
    console.log(this.newCustomer.value);
    this.dialogRef.close({ data:this.newCustomer.value})
  }

  closeDialog() {
    this.dialogRef.close(null);
  }
}
