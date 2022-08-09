import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentPointer {
  dpArrayChange = new Subject<FormArray>();
  documentPointer: FormArray;

  constructor(fb: FormBuilder) {
    this.documentPointer = fb.array([]);
    Object.keys(Document).forEach((key)=>{
      this.addFormGroupInArray(1,true);
    });
  }

  addFormGroupInArray(value?: number, active?: boolean) {
    this.documentPointer.push(
      new FormGroup({
        value: new FormControl(value ? value : ''),
        active: new FormControl(active ? active : ''),
      })
    );
    this.dpArrayChange.next(this.documentPointer);
  }

  getDocumentLength() {
    return Object.keys(Document).length/2;
  }
  getDocumentPointerArray() {
    return this.documentPointer;
  }
  getDocumentPointerById(id:number) {
    return this.documentPointer.at(id);
  }
  getDocumentValueById(index:number){
    return (Object.values(Document))[index];
  }
}
enum Document {
  Order='Order',
  OrderConfirm='Order Confirm',
  OrderShipment='Order Shipment',
  orderReceipt='Order Receipt',
  OrderInvoice='Order Invoice',
}
