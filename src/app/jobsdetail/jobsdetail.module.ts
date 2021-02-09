import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsdetailPageRoutingModule } from './jobsdetail-routing.module';

import { JobsdetailPage } from './jobsdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsdetailPageRoutingModule
  ],
  declarations: [JobsdetailPage]
})
export class JobsdetailPageModule {}
