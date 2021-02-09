import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-companies",
  templateUrl: "./companies.page.html",
  styleUrls: ["./companies.page.scss"],
})
export class CompaniesPage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  //** variaveis **//
  private arrayCompanies: Array<string>;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.arrayCompanies = JSON.parse(params.special);
      }
    });
  }

  openCompanyDetail(c: Array<string>) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(c),
      },
    };
    this.router.navigate(["home/companies/companiesdetail"], navigationExtras);
  }
}
