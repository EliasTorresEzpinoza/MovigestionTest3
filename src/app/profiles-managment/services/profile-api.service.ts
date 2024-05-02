import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  constructor(private http: HttpClient) { }

  getAllActivities(): Observable<any> {
    return this.http.get('https://my-json-server.typicode.com/upc-OpenSource-BicasTeam/open-json-endpoints/reports');
  }

  getAllCondition(): Observable<any> {
    return this.http.get('https://my-json-server.typicode.com/upc-OpenSource-BicasTeam/open-json-endpoints/vehicle');
  }

  getAllDeliveries(): Observable<any> {
    return this.http.get('https://my-json-server.typicode.com/upc-OpenSource-BicasTeam/open-json-endpoints/shipment');
  }
}
