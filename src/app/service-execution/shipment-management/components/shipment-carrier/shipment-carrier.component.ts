import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ShipmentApiService} from "../../services/shipment-api.service";
import {IamApiService} from "../../../../iam/services/iam-api.service.service";
import {ShipmentEntity} from "../../model/shipment.entity";
import {UserEntity} from "../../../../iam/model/user.entity";

@Component({
  selector: 'app-shipment-carrier',
  templateUrl: './shipment-carrier.component.html',
  styleUrl: './shipment-carrier.component.css'
})
export class ShipmentCarrierComponent {
  shipments: any[] = [];
  shipment: ShipmentEntity = {} as ShipmentEntity;
  user: UserEntity = {} as UserEntity;

  constructor(private route: ActivatedRoute, private router: Router,private shipmentApiService: ShipmentApiService,private iamApi: IamApiService) {
    this.user.id = this.route.snapshot.params['id'];

  }
  ngOnInit(): void {
    this.getDataShipment(this.user.id);
  }


  async getDataShipment(userId: string) {
    this.shipmentApiService.getShipmentsByIdOfUser(userId).subscribe((data:any)=>{
      data.map((data:any)=>{
        console.log(data);
        this.shipments.push(data)
      })
    })

  }
}
