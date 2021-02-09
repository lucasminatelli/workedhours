import { Component } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { CompaniesService } from "../common/services/companies.service";
import { JobsService } from "../common/services/jobs.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(
    private companiesService: CompaniesService,
    private jobsService: JobsService,
    private router: Router
  ) {}

  //** variaveis **//
  private arrayCompanies: Array<string>;
  private arrayJobs: Array<string>;

  ngOnInit() {
    this.companiesService.rCompanies().subscribe((data: any) => {
      this.arrayCompanies = data;
    });
    this.jobsService.rJobs().subscribe((data: any) => {
      this.arrayJobs = data;
    });
  }

  openJobs() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.arrayJobs),
      },
    };
    this.router.navigate(["home/jobs"], navigationExtras);
  }

  openCompanies() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.arrayCompanies),
      },
    };
    this.router.navigate(["home/companies"], navigationExtras);
  }
}
