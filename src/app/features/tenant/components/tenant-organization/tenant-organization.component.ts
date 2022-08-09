import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Organization } from '@core/models/organization.model';

@Component({
  selector: 'app-tenant-organization',
  templateUrl: './tenant-organization.component.html',
  styleUrls: ['./tenant-organization.component.scss'],
})
export class TenantOrganizationComponent implements OnInit {
  organizationForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    porezniBroj: new FormControl(''),
    adresa: new FormControl(''),
    drzava: new FormControl(''),
    email: new FormControl(''),
    file: new FormControl(''),
  });
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirect() {
    this.router.navigate(['organization']);
  }
  onSubmit() {
    let forg = this.organizationForm.value;
    const org = new Organization(
      forg.porezniBroj,
      forg.adresa,
      forg.drzava,
      forg.email,
      forg.file
    );
    console.log(org);
    //this.redirect();
  }
}
