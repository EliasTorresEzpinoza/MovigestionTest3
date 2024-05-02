import { Component, OnInit } from '@angular/core';
import { ReportsApiService} from "../../report-view/report-view.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})


export class ReportViewComponent implements OnInit {
  reports: any[] = [];

  constructor(private reportsApi: ReportsApiService) { }

  ngOnInit(): void {
    this.getDataReport();
  }

  async getDataReport() {
    try {
      const response: Observable<any> =  this.reportsApi.getAllReports();
      const reports = await response.toPromise();
      for (let report of reports) {
        const userResponse: Observable<any>  =  this.reportsApi.findUserByID(report['id-user']);
        const user = await userResponse.toPromise();
        report.name = `${user.name} ${user.lastName}`;
      }
      this.reports = reports;
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  }
}

