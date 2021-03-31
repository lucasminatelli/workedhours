import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  //** variaveis **//
  private arrayEmployees: Array<string>;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.arrayEmployees = JSON.parse(params.special);
      }
    });
  }

  openEmployeeDetail(c: Array<string>) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(c),
      },
    };
    this.router.navigate(["home/employees/employeesdetail"], navigationExtras);
  }
}