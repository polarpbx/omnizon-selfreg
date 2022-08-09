import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agremment-organization',
  templateUrl: './agremment-organization.component.html',
  styleUrls: ['./agremment-organization.component.scss']
})
export class AgremmentOrganizationComponent implements OnInit {

  boolFirstOrganization:boolean=true;

  organizationForm=new FormGroup({
    accPoint:new FormControl("option1"),
    docType:new FormControl("option1")

  });
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate(['organization-second']);

  }
  redirectBack(){
    this.router.navigate(['account-organization']);
  }


}
