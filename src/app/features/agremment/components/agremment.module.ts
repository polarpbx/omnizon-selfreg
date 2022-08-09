import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AgremmentOrganizationComponent } from './agremment-organization/agremment-organization.component';
import { AgremmentDocumentDirectionComponent } from './agremment-document-direction/agremment-document-direction.component';
import { AgremmentConfirmComponent } from './agremment-confirm/agremment-confirm.component';
import { AgremmentOrganizationSecondComponent } from './agremment-organization-second/agremment-organization-second.component';
import { AgremmentDocumentDirectionPointerComponent } from './agremment-document-direction/agremment-document-direction-pointer/agremment-document-direction-pointer.component';

import {TranslateModule}from "@ngx-translate/core";
@NgModule({
  declarations: [
    AgremmentOrganizationComponent,
    AgremmentDocumentDirectionComponent,
    AgremmentConfirmComponent,
    AgremmentOrganizationSecondComponent,
    AgremmentDocumentDirectionPointerComponent,
  ],
  exports:[
    AgremmentOrganizationComponent,
    AgremmentDocumentDirectionComponent,
    AgremmentConfirmComponent,
    AgremmentOrganizationSecondComponent,
    AgremmentDocumentDirectionPointerComponent,
  ],
  imports:[
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    TranslateModule.forChild(),
  ]
})
export class AgremmentModule {}
