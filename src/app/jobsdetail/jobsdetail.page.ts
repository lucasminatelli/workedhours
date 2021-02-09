import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-jobsdetail",
  templateUrl: "./jobsdetail.page.html",
  styleUrls: ["./jobsdetail.page.scss"],
})
export class JobsdetailPage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  //** variaveis **//
  private arrayJob: Array<string>;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.arrayJob = JSON.parse(params.special);
      }
    });
  }
}
