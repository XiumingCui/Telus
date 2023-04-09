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

  newGroup = this.fb.group({
    groupId: [],
    customerIds: [],
  });

  constructor(
    public dialogRef: MatDialogRef<CreateNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    console.log(this.customerBillCycleEnums);
    console.log(data);
  }

  type = this.data.type;
  customersInNewGroup: number[] = [];
  trackByFn(index, item) {
    return index;
  }
  ngOnInit() {}

  onCustomerSubmit() {
    console.log(this.newCustomer.value);
  }

  addCustomer(targetCustomerId) {
    // console.log('customer to be added', parseInt(targetCustomerId.value));
    this.customersInNewGroup.push(parseInt(targetCustomerId.value));
    // console.log('customerIDs', this.customersInNewGroup);
  }
  submitNewGroup(groupId) {
    const customerIds = [];
    if (this.newGroup.value.customerIds) {
      console.log('customerIDs', this.customersInNewGroup);

      // customerIds.push();

      // const afterIds = this.newGroup.value.customerIds.split(",")

      // console.log('after: ', customerIds);
    }
  }

  closeDialog() {
    this.dialogRef.close(null);
  }
}
