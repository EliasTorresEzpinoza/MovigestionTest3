import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IamApiService} from "../../../iam/services/iam-api.service.service";
import {UserEntity} from "../../../iam/model/user.entity";

@Component({
  selector: 'app-sidebar-public',
  templateUrl: './sidebar-public.component.html',
  styleUrl: './sidebar-public.component.css'
})
export class SidebarPublicComponent {
  user: UserEntity = {} as UserEntity;
  name: string = '';
  lastName: string = '';
  type: string = '';
  visible: boolean = true;
  constructor(private route: ActivatedRoute, private router: Router, private api: IamApiService){
    this.user.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.api.findUserById(this.user.id).subscribe((data: any) => {
      this.type = data[0].type;
      this.name = data[0].name;
      this.lastName = data[0].lastName;
    });
  }

  goToHome(): void {
    if (this.type === 'businessman') {
      this.router.navigate([ this.user.id,`home-businessman`]);
    } else {
      this.router.navigate([ this.user.id,`home-carrier`]);
    }
  }

  goToProfile(): void {
    this.router.navigate([ this.user.id,`profile`]);
  }

  goToVehicles(): void {
    if (this.type === 'businessman') {
      this.router.navigate([ this.user.id,`vehicles-businessman`]);
    } else {
      this.router.navigate([ this.user.id,`vehicles-carrier`]);
    }
  }

  goToReports(): void {
    if (this.type === 'businessman') {
      this.router.navigate([ this.user.id,`report-businessman`]);
    } else {
      this.router.navigate([ this.user.id,`report-carrier`]);
    }
  }

  goToShipments(): void {
    if (this.type === 'businessman') {
      this.router.navigate([ this.user.id,`shipment-businessman`]);
    } else {
      this.router.navigate([ this.user.id,`shipment-carrier`]);
    }
  }

}
