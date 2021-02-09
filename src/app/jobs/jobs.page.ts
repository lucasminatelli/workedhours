import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.page.html",
  styleUrls: ["./jobs.page.scss"],
})
export class JobsPage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  //** variaveis **//
  private arrayJobs: Array<string>;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.arrayJobs = JSON.parse(params.special);
      }
    });
  }

  openJobDetail(j: Array<string>) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(j),
      },
    };
    this.router.navigate(["home/jobs/jobsdetail"], navigationExtras);
  }
}
