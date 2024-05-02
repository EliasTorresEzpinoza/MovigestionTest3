import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShipmentApiService {
  baseUrl="https://my-json-server.typicode.com/upc-OpenSource-BicasTeam/open-json-endpoints"
  constructor(private http:HttpClient) { }

  getAllShipments(){
    return this.http.get(`${this.baseUrl}/shipment`)
  }
  addShipment(shipment:any){
    return this.http.post(`${this.baseUrl}/shipment`,shipment)
  }
  deleteShipment(id:any){
    return this.http.delete(`${this.baseUrl}/shipment?id=${id}`);
  }
  getShipmentsByIdOfUser(id:any){
    return this.http.get(`${this.baseUrl}/shipment?idUser=${id}`)
  }
}
