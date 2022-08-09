import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgremmentConfirmComponent } from '@features/agremment/components/agremment-confirm/agremment-confirm.component';
import { AgremmentDocumentDirectionComponent } from '@features/agremment/components/agremment-document-direction/agremment-document-direction.component';
import { AgremmentOrganizationComponent } from '@features/agremment/components/agremment-organization/agremment-organization.component';
import { AgremmentOrganizationSecondComponent } from '@features/agremment/components/agremment-organization-second/agremment-organization-second.component';
import { TenantAccountComponent } from '@features/tenant/components/tenant-account/tenant-account.component';
import { TenantOrganizationComponent } from '@features/tenant/components/tenant-organization/tenant-organization.component';

const routes: Routes = [
  {
    path: '',
    component: TenantAccountComponent,
  },
  {
    path: 'account',
    component: TenantAccountComponent,
  },
  { path: 'account-organization', component: TenantOrganizationComponent },

  { path: 'organization', component: AgremmentOrganizationComponent },
  { path: 'organization-second', component: AgremmentOrganizationSecondComponent },
  {
    path: 'document-direction',
    component: AgremmentDocumentDirectionComponent,
  },
  { path: 'confirm', component: AgremmentConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
