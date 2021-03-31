import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeesdetail',
  templateUrl: './employeesdetail.page.html',
  styleUrls: ['./employeesdetail.page.scss'],
})
export class EmployeesdetailPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  //** variaveis **//
  private arrayEmployee: Array<string>;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.arrayEmployee = JSON.parse(params.special);
      }
    });
  }
}