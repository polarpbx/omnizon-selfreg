import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agremment-document-direction-pointer',
  templateUrl: './agremment-document-direction-pointer.component.html',
  styleUrls: ['./agremment-document-direction-pointer.component.scss']
})
export class AgremmentDocumentDirectionPointerComponent implements OnInit {
  @Input() formAgremmentValue!:string|number;
  @Input() formAgremmentActive!:string|boolean;
  @Input() formControlRadioName!:string;
  @Input() formControlCheckBoxName!:string;
  @Input() operationName!:string;

  constructor() { }

  ngOnInit(): void {
    console.log("formAgremmentValue: "+this.formAgremmentValue);
    console.log("formAgremmentActive: "+this.formAgremmentActive);
    console.log("formControlRadioName: "+this.formControlRadioName);
    console.log("formControlCheckBoxName: "+this.formControlCheckBoxName);
    console.log("operationName: "+this.operationName);
  }

  checkAgrVal(num:number){
    return this.formAgremmentValue==num;
  }
  checkAgrAct(){
    return <boolean>this.formAgremmentActive;
  }

}
