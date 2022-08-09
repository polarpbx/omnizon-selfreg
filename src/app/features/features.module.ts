import { NgModule } from '@angular/core';

import { TenantModule } from '@features/tenant/tenant.module';
import { AgremmentModule } from './agremment/components/agremment.module';

@NgModule({
  exports: [TenantModule, AgremmentModule],
  imports: [TenantModule,AgremmentModule],

  declarations: [],
})
export class FeaturesModule {}
