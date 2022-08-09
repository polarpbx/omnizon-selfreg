import { NgModule } from '@angular/core';

import { TenantAccountComponent } from './components/tenant-account/tenant-account.component';
import { TenantOrganizationComponent } from './components/tenant-organization/tenant-organization.component';
import { TenantConfirmComponent } from './components/tenant-confirm/tenant-confirm.component';

import { TenantService } from './services/tenant.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgxCaptchaModule } from 'ngx-captcha';
import { TranslateModule } from '@ngx-translate/core';
import { PasswordMatchDirective } from './directives/password-match.directive';

@NgModule({
  declarations: [
    TenantAccountComponent,
    TenantOrganizationComponent,
    TenantConfirmComponent,
    PasswordMatchDirective,
  ],
  exports: [
    TenantAccountComponent,
    TenantOrganizationComponent,
    TenantConfirmComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    NgxCaptchaModule,
    TranslateModule.forChild(),
  ],
  providers: [TenantService],
})
export class TenantModule {}
