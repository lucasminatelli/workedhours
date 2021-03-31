import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeesdetailPageRoutingModule } from './employeesdetail-routing.module';

import { EmployeesdetailPage } from './employeesdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeesdetailPageRoutingModule
  ],
  declarations: [EmployeesdetailPage]
})
export class EmployeesdetailPageModule {}
