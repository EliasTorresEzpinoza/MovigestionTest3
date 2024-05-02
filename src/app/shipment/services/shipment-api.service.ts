import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShipmentApiService {

  constructor(private http: HttpClient) { }

  findUserByID(id){
    return this.http.get(`https://my-json-server.typicode.com/upc-OpenSource-BicasTeam/open-json-endpoints/users?id=${id}`);
  }

  getAllShipments(){
    return this.http.get(`https://my-json-server.typicode.com/upc-OpenSource-BicasTeam/open-json-endpoints/shipment\`);
  }
}


