import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
  },
  {
    path: "companies",
    loadChildren: () =>
      import("../companies/companies.module").then(
        (m) => m.CompaniesPageModule
      ),
  },
  {
    path: "jobs",
    loadChildren: () =>
      import("../jobs/jobs.module").then((m) => m.JobsPageModule),
  },
  {
    path: "employees",
    loadChildren: () =>
      import("../employees/employees.module").then((m) => m.EmployeesPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
