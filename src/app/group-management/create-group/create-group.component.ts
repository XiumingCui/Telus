import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Group } from '../../models/group';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css'],
})
export class CreateGroupComponent implements OnInit {
  newGroup = this.fb.group({
    groupId: [],
    customerIds: [],
  });

  constructor(
    public dialogRef: MatDialogRef<CreateGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    console.log(data);
  }
  customersInNewGroup: number[] = [];
  trackByFn(index, item) {
    return index;
  }
  ngOnInit() {}

  addCustomer(targetCustomerId) {
    console.log(
      'customer to be added',
      typeof parseInt(targetCustomerId.value)
    );
    console.log('322:  ', this.customersInNewGroup.length);
    console.log(
      '321:  ',
      this.customersInNewGroup.includes(parseInt(targetCustomerId.value))
    );
    if (
      this.customersInNewGroup.length == 0 ||
      !this.customersInNewGroup.includes(parseInt(targetCustomerId.value))
    ) {
      this.customersInNewGroup.push(parseInt(targetCustomerId.value));
    }
    // var getValue= document.getElementById("customerId");
    // if (getValue && getValue.value !="") {
    //     getValue.value = "";
    // }
  }

  createGroup(groupId) {
    if (groupId) {
      console.log('groupId', parseInt(groupId.value));
      console.log('customerIDs:', this.customersInNewGroup);
      this.dialogRef.close({
        groupId: parseInt(groupId.value),
        customerIds: this.customersInNewGroup,
      });
    }
  }
  closeDialog() {
    this.dialogRef.close(null);
  }
}
