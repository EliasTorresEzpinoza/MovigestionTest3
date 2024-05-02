import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserEntity} from "../model/user.entity";
import {BaseService} from "../../shared/services/base.service.service";

@Injectable({
  providedIn: 'root'
})
export class IamApiService {
  baseUrl="https://my-json-server.typicode.com/upc-OpenSource-BicasTeam/open-json-endpoints"
  constructor(private http:HttpClient){
  }
  findUserWithEmailAndPassword(email:any,password:any){
    return this.http.get(`${this.baseUrl}/users?email=${email}&password=${password}`)
  }
  findUserWithEmail(email:any){
    return this.http.get(`${this.baseUrl}/users?email=${email}`)
  }
  createUser(jsonUser:any){
    return this.http.post(`${this.baseUrl}/users`,jsonUser)
  }
  findUserById(id:any){
   return this.http.get(`${this.baseUrl}/users?id=${id}`)
  }
  updateUser(id:any,jsonUser:JSON){
    return this.http.put(`${this.baseUrl}/users?id=${id}`,jsonUser)
  }
}
