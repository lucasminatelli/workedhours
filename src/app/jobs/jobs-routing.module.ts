import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { JobsPage } from "./jobs.page";

const routes: Routes = [
  {
    path: "",
    component: JobsPage,
  },
  {
    path: "jobsdetail",
    loadChildren: () =>
      import("../jobsdetail/jobsdetail.module").then(
        (m) => m.JobsdetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsPageRoutingModule {}
