import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesdetailPage } from './companiesdetail.page';

const routes: Routes = [
  {
    path: '',
    component: CompaniesdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesdetailPageRoutingModule {}
