import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css'],
})
export class EditGroupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  addCusToGroup(targetCustomerId) {
    // console.log('customer need to be added', parseInt(targetCustomerId.value));
    // console.log(this.data);
    if (!this.data.customerIds.includes(parseInt(targetCustomerId.value))) {
      this.data.customerIds.push(parseInt(targetCustomerId.value));
    }
    this.dialogRef.close({ data: this.data.customerIds});
  }

  removeCusFromGroup(targetCustomerId) {
    // console.log(
    //   'customer need to be deleted',
    //   parseInt(targetCustomerId.value)
    // );

    // console.log('groupId', this.data.groupId);
    // console.log('all customer in this group', this.data.customerIds);
    //check if customer is in the group
    //delete customer from group
    if (this.data.customerIds.includes(parseInt(targetCustomerId.value))) {
      this.data.customerIds = this.data.customerIds.filter(
        (customerId) => customerId !== parseInt(targetCustomerId.value)
      );
      // console.log('all customer in this group AFTER', this.data.customerIds);
    }
    this.dialogRef.close({ data: this.data.customerIds});
  }

  closeDialog() {
    this.dialogRef.close(null);
  }
}
