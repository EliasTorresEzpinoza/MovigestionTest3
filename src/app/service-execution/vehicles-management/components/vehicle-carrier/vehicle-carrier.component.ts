import { Component } from '@angular/core';
import {VehicleEntity} from "../../model/vehicle.entity";
import {UserEntity} from "../../../../iam/model/user.entity";
import {ActivatedRoute, Router} from "@angular/router";
import {VehiclesApiService} from "../../services/vehicles-api.service";
import {IamApiService} from "../../../../iam/services/iam-api.service.service";

@Component({
  selector: 'app-vehicle-carrier',
  templateUrl: './vehicle-carrier.component.html',
  styleUrl: './vehicle-carrier.component.css'
})
export class VehicleCarrierComponent {
  vehicles: any[] = [];
  vehiclesId:any[] = [];
  vehicle: VehicleEntity = {} as VehicleEntity;
  user: UserEntity = {} as UserEntity;

  constructor(private route: ActivatedRoute, private router: Router,private vehiclesApi: VehiclesApiService, private iamApi: IamApiService) {
    this.user.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getVehicles(this.user.id);
  }

  async getVehicles(userId: string) {
    this.iamApi.findUserById(userId).subscribe(async(data:any)=>{
      data[0].vehicles.map((data:any)=>{
        this.vehiclesId.push(data.idVehicle);
      });
      this.vehiclesId.map(async(data:any)=>{
        await this.getVehicleInfo(this.vehiclesId[0])
      })

    });


  }
  async getVehicleInfo(id:any){
    this.vehiclesApi.getVehicleById(id).subscribe((data:any)=>{
      this.vehicles.push(data);
    })

  }

}
