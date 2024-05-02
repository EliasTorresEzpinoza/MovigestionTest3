import { Component } from '@angular/core';
import {IamApiService} from "../../../../iam/services/iam-api.service.service";
import {VehiclesApiService} from "../../services/vehicles-api.service";
import {VehicleEntity} from "../../model/vehicle.entity";
import {UserEntity} from "../../../../iam/model/user.entity";
import {ActivatedRoute, Router} from "@angular/router";




@Component({
  selector: 'app-vehicle-businessman',
  templateUrl: './vehicle-businessman.component.html',
  styleUrl: './vehicle-businessman.component.css'
})
export class VehicleBusinessmanComponent {
  showAddForm: boolean = false;
  showDeleteForm: boolean = false;
  deleteVehicleId: string = '';
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


  addVehicle() {
    const json = {
      licensePlate: this.vehicle.licensePlate,
      model: this.vehicle.model,
      serialNumber: this.vehicle.serialNumber
    };
    this.vehiclesApi.addVehicle(json)
      .subscribe((response:any) => {
        this.vehicle.serialNumber="";
        this.vehicle.licensePlate="";
        this.vehicle.model="";
      });
  }

  deleteVehicle() {
    this.vehiclesApi.deleteVehicle(this.deleteVehicleId)
      .subscribe(() => {
        this.deleteVehicleId = '';
      });
  }



  async getVehicles(userId: string) {
    this.iamApi.findUserById(userId).subscribe(async(data:any)=>{
      data[0].vehicles.map((data:any)=>{
        this.vehiclesId.push(data.idVehicle);
      });
      this.vehiclesId.map(async(data:any)=>{
        await this.getVehicleInfo(this.vehiclesId[data-1])
      })

    });


  }
  async getVehicleInfo(id:any){
    this.vehiclesApi.getVehicleById(id).subscribe((data:any)=>{
      this.vehicles.push(data);
    })

  }

}
