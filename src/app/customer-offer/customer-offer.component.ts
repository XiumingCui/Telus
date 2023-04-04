import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ORDERS, OPTIONS } from '../mock-data/orders';
import { Order } from '../models/order';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-customer-offer',
  templateUrl: './customer-offer.component.html',
  styleUrls: ['./customer-offer.component.css'],
})
export class CustomerOfferComponent implements OnInit {
  orderForm: FormGroup;
  id: string;
  orders = ORDERS;
  options = OPTIONS;
  submitted = false;
  formLoaded = true;
  selectedOption = 0;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit() {
    console.log(this.orders);
    this.orderForm = this.fb.group({
      orderId: [],
      groupId: [],
      customerId: [],
      offerId: [],
      purchaseTime: ['2000-01-01'],
    });
  }

  onSubmit() {
    this.submitted = true;
    // this.createOrder(this.form.value);
    this.createOrder(this.orderForm.value);
  }

  private createOrder(newOrder: Order) {
    console.log(newOrder);
    // this.location.back();
    // this.orderService.create(this.form.value)
    //   .subscribe({
    //     next: () => {
    //       this.location.back();
    //     },
    //     error: error => {
    //     },
    //   });

    // if (order.orderId && (order.customerId || order.groupId)) {
    //   this.orders.push(order);
    // }

    if (newOrder.orderId && (newOrder.groupId || newOrder.customerId)) {
      const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Confirm adding new order',
          message:
            'Are you sure, you want to add a new order: ' + newOrder.offerId,
        },
      });

      confirmDialog.afterClosed().subscribe((result) => {
        if (result === true) {
          this.orders.push(newOrder);
        }
      });
    }
  }

  cancelOrder(order: Order) {
    console.log(order);
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove order',
        message: 'Are you sure, you want to remove an order: ' + order.orderId,
      },
    });
    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        this.orders = this.orders.filter(
          (item) => item.orderId !== order.orderId
        );
      }
    });
  }
}
