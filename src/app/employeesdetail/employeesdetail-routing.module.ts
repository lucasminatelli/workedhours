import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesdetailPage } from './employeesdetail.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeesdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesdetailPageRoutingModule {}
