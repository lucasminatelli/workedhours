import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Company } from "../classes/company";

@Injectable({
  providedIn: "root",
})
export class CompaniesService {
  constructor(private http: HttpClient) {}

  cCompanies(company: Company) {
    return this.http.post<Company>(
      "https://pmrprojects.000webhostapp.com/workedhours/apis/companies/cCompanies.php",
      JSON.stringify(company),
      { responseType: "text" as "json" }
    );
  }

  rCompanies() {
    return this.http.get(
      "https://pmrprojects.000webhostapp.com/workedhours/apis/companies/rCompanies.php"
    );
  }

  uCompanies(company: Company) {
    return this.http.post<Company>(
      "https://pmrprojects.000webhostapp.com/workedhours/apis/companies/uCompanies.php",
      JSON.stringify(company),
      { responseType: "text" as "json" }
    );
  }

  dCompanies(company: Company) {
    return this.http.post<Company>(
      "https://pmrprojects.000webhostapp.com/workedhours/apis/companies/dCompanies.php",
      JSON.stringify(company),
      { responseType: "text" as "json" }
    );
  }
}
