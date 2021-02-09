import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-companiesdetail",
  templateUrl: "./companiesdetail.page.html",
  styleUrls: ["./companiesdetail.page.scss"],
})
export class CompaniesdetailPage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  //** variaveis **//
  private arrayCompany: Array<string>;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.arrayCompany = JSON.parse(params.special);
      }
    });
  }
}
