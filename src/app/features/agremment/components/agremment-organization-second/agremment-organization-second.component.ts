import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agremment-organization-second',
  templateUrl: './agremment-organization-second.component.html',
  styleUrls: ['./agremment-organization-second.component.scss']
})
export class AgremmentOrganizationSecondComponent implements OnInit {

  organizationForm=new FormGroup({
    accPoint:new FormControl("option1"),
    docType:new FormControl("option1")

  });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect(){

    this.router.navigate(['document-direction']);
  }
  redirectBack(){
    this.router.navigate(['organization']);
  }

}
