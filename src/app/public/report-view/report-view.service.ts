import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsApiService {
  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  findUserByID(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/moviGestion-iam/users?id=${id}`);
  }

  getAllReports(): Observable<any> {
    return this.http.get(`${this.baseURL}/moviGestion-cya/reports`);
  }
}
