import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  cEmployees(employee: Employee) {
    return this.http.post<Employee>(
      "https://pmrprojects.000webhostapp.com/workedhours/apis/employees/cEmployees.php",
      JSON.stringify(employee),
      { responseType: "text" as "json" }
    );
  }

  rEmployees() {
    return this.http.get(
      "https://pmrprojects.000webhostapp.com/workedhours/apis/employees/rEmployees.php"
    );
  }

  uEmployees(employee: Employee) {
    return this.http.post<Employee>(
      "https://pmrprojects.000webhostapp.com/workedhours/apis/employees/uEmployees.php",
      JSON.stringify(employee),
      { responseType: "text" as "json" }
    );
  }

  dEmployees(employee: Employee) {
    return this.http.post<Employee>(
      "https://pmrprojects.000webhostapp.com/workedhours/apis/employees/dEmployees.php",
      JSON.stringify(employee),
      { responseType: "text" as "json" }
    );
  }
}
