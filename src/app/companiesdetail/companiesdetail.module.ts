import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompaniesdetailPageRoutingModule } from './companiesdetail-routing.module';

import { CompaniesdetailPage } from './companiesdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompaniesdetailPageRoutingModule
  ],
  declarations: [CompaniesdetailPage]
})
export class CompaniesdetailPageModule {}
