import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CUSTOMERS } from '../mock-data/customers';
import { GROUPS } from '../mock-data/groups';
import { Customer } from '../models/customer';
import { EditGroupComponent } from './edit-group/edit-group.component';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.css'],
})
export class GroupManagementComponent implements OnInit {
  customers = CUSTOMERS;
  groups = GROUPS;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}
  selectedCustomer: Customer;
  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }

  // addCusToGroup(groupId) {
  //   console.log('groupId: ', groupId.value);
  //   console.log('this.selectedCustomer: ', this.selectedCustomer.customerId);
  //   //http.put(customer/{customerId}) to (group/groupId)
  //   this.groups.forEach((group) => {
  //     if (group.groupId == parseInt(groupId.value)) {
  //       let flag = false;
  //       for (let i = 0; i < group.customerIds.length; i++) {
  //         if (group.customerIds[i] == this.selectedCustomer.customerId) {
  //           flag = true;
  //         }
  //       }
  //       if (flag != true) {
  // const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
  //   data: {
  //     title: `Confirm adding new customer to group ${group.groupId}`,
  //     message:
  //       'Are you sure, you want to add this customer: ' +
  //       this.selectedCustomer.customerId,
  //   },
  // });
  // confirmDialog.afterClosed().subscribe((result) => {
  //   if (result.button === 'add') {
  //     group.customerIds.push(this.selectedCustomer.customerId);
  //     console.log('group.customerIds AFTER:  ', group.customerIds);
  //     const newGroupCustomerIds = group.customerIds;
  //     this.groups.filter(
  //       (group) => group.groupId == parseInt(groupId.value)
  //     )[0] = group;
  //   }
  // });
  // }
  // }
  //   });
  // }

  removeCusFromGroup(targetGroup) {
    const dialogRef = this.dialog.open(EditGroupComponent, {
      data: {
        groupId: targetGroup.groupId,
        customerIds: targetGroup.customerIds,
      },
      width: '500px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('result::   ', result);
      if (result.button === 'delete') {
        console.log('The dialog was closed');
        console.log(`Dialog result: ${result.data}`);
        this.groups.forEach((group) => {
          if (group.groupId == targetGroup.groupId) {
            group.customerIds = result.data;
          }
        });
      } else if (result.button === 'add') {
        console.log('The dialog was closed');
        console.log(`Dialog result: ${result.data}`);
        this.groups.forEach((group) => {
          if (group.groupId == targetGroup.groupId) {
            group.customerIds = result.data;
          }
        });
      }
    });
  }
}