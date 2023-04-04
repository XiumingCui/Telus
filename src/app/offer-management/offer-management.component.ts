import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { OFFERS } from '../mock-data/offers';
import { Offer } from '../models/offer';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
// import { OfferService } from './service/offer.service';

@Component({
  selector: 'app-offer-management',
  templateUrl: './offer-management.component.html',
  styleUrls: ['./offer-management.component.css'],
})
export class OfferManagementComponent implements OnInit {
  // dataSource$ : Observable<Offer[]>;
  offers = OFFERS;
  displayedColumns: string[] = [
    'offerId',
    'recurringPrice',
    'recurringVolume',
    'recurringPeriod',
    'effectiveTime',
    'expirationTime',
    'networkSliceId',
    'networkSpeed',
  ];

  form: FormGroup;
  formLoaded = true;
  submitted = false;

  constructor(
    private fb: FormBuilder, // private offerService: OfferService
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    console.log(this.offers);
    this.form = this.fb.group({
      offerId: [],
      recurringPrice: [0],
      recurringVolume: [0],
      recurringPeriod: [0],
      effectiveTime: ['2000-01-01'],
      expirationTime: ['2000-01-01'],
      networkSliceId: [0],
      networkSpeed: [0],
    });
    // this.dataSource = this.offerService.getAll()
  }

  deleteOffer(offer: Offer) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Offer',
        message: 'Are you sure, you want to remove an offer: ' + offer.offerId,
      },
    });
    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        this.offers = this.offers.filter(
          (item) => item.offerId !== offer.offerId
        );
      }
    });
    // if (confirm(`Are you sure to delete ${offer.offerId}?`)) {
    //   // this.offerService.delete(offer.offerId).subscribe(() => {
    //   // this.dataSource = this.offerService.getAll();
    //   // });
    //   console.log(offer);
    // }
  }

  onSubmit() {
    this.submitted = true;
    this.createOffer(this.form.value);
  }
  private createOffer(newOffer: Offer) {
    // this.offerService.create(this.form.value).subscribe({
    // });
    console.log('newOffer: ', newOffer);
    if (newOffer.offerId) {
      const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Confirm adding new offer',
          message:
            'Are you sure, you want to add a new offer: ' + newOffer.offerId,
        },
      });

      confirmDialog.afterClosed().subscribe((result) => {
        if (result === true) {
          this.offers.push(newOffer);
        }
      });
    }
  }
}
