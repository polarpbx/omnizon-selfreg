import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agremment-document-direction',
  templateUrl: './agremment-document-direction.component.html',
  styleUrls: ['./agremment-document-direction.component.scss'],
})
export class AgremmentDocumentDirectionComponent implements OnInit {
  public formAgremment: FormGroup = new FormGroup({
    order: new FormControl(''),
    orderOptions: new FormControl(''),
    orderConfirm: new FormControl(''),
    orderConfirmOptions: new FormControl(''),
    orderShipment: new FormControl(''),
    shipmentConfirmationOptions: new FormControl(''),
    orderReceipt: new FormControl(''),
    receiptConfirmationOptions: new FormControl(''),
    orderInvoice: new FormControl(''),
    invoiceConfirmationOptions: new FormControl(''),
  });

  constructor(private router: Router) {
    this.formAgremment.setValue({
      order: 1,
      orderOptions: 2,
      orderConfirm: 1,
      orderConfirmOptions: 2,
      orderShipment: 1,
      shipmentConfirmationOptions: 2,
      orderReceipt: 1,
      receiptConfirmationOptions: 2,
      orderInvoice: 1,
      invoiceConfirmationOptions: 2,
    });
  }

  ngOnInit(): void {}

  redirect() {
    this.router.navigate(['confirm']);
  }
  redirectBack() {
    this.router.navigate(['organization-second']);
  }

  onSubmit() {
    
  }
}
