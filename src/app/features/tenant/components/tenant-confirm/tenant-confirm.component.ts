import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-confirm',
  templateUrl: './tenant-confirm.component.html',
  styleUrls: ['./tenant-confirm.component.scss'],
})
export class TenantConfirmComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirect() {
    this.router.navigate(['account-organization']);
  }
}
