import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehiclesApiService {
  baseUrl="https://my-json-server.typicode.com/upc-OpenSource-BicasTeam/open-json-endpoints"
  constructor(private http:HttpClient) { }
  getVehicleById(id:any){
    return this.http.get(`${this.baseUrl}/vehicle?id=${id}`)
  }
  addVehicle(vehicle:any){
    return this.http.post(`${this.baseUrl}/vehicle`,vehicle);
  }
  deleteVehicle(id:any){
    return this.http.delete(`${this.baseUrl}/vehicle?id=${id}`);
  }
}
