import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Job } from "../classes/Job";

@Injectable({
  providedIn: "root",
})
export class JobsService {
  constructor(private http: HttpClient) {}

  cJobs(job: Job) {
    return this.http.post<Job>(
      "https://pmrprojects.000webhostapp.com/workedhours/apis/jobs/cJobs.php",
      JSON.stringify(job),
      { responseType: "text" as "json" }
    );
  }

  rJobs() {
    return this.http.get(
      "https://pmrprojects.000webhostapp.com/workedhours/apis/jobs/rJobs.php"
    );
  }

  uJobs(job: Job) {
    return this.http.post<Job>(
      "https://pmrprojects.000webhostapp.com/workedhours/apis/jobs/uJobs.php",
      JSON.stringify(job),
      { responseType: "text" as "json" }
    );
  }

  dJobs(job: Job) {
    return this.http.post<Job>(
      "https://pmrprojects.000webhostapp.com/workedhours/apis/jobs/dJobs.php",
      JSON.stringify(job),
      { responseType: "text" as "json" }
    );
  }
}
