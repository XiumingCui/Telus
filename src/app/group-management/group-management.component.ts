import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CUSTOMERS } from '../mock-data/customers';
import { GROUPS } from '../mock-data/groups';
import { Customer } from '../models/customer';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { CreateGroupComponent } from './create-group/create-group.component';

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

  createNew() {
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(CreateNewComponent, {
        width: '500px',
        height: '200px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('result::   ', result);

        console.log('The dialog was closed');
        // console.log(`Dialog result: ${result.data.customerId}`);
        this.customers.push(result.data);
      });
    }
  }

  deleteCus(tarCustomer) {
    console.log(tarCustomer.customerId);
    // console.log(this.customers)

    // this.customers.filter(cus=>{
    //   cus.customerId != tarCustomer.customerId
    // })
    // console.log('find ', this.customers.filter(cus=>cus.customerId !== tarCustomer.customerId))

    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Customer',
        message:
          'Are you sure, you want to remove customer: ' +
          tarCustomer.customerId,
      },
    });
    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        this.customers = this.customers.filter(
          (cus) => cus.customerId !== tarCustomer.customerId
        );
        this.selectedCustomer= new Customer
      }
    });
  }

  createGroup() {
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(CreateGroupComponent, {
        width: '500px',
        height: '200px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('result::   ', result);

        console.log('The dialog was closed');
        // console.log(`Dialog result: ${result.data}`);
        this.groups.push(result);
      });
    }
  }

  editGroup(targetGroup) {
    if (this.dialog.openDialogs.length == 0) {
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
        if (result) {
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
}
