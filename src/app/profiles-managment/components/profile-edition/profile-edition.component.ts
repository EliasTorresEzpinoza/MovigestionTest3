import { Component } from '@angular/core';
import {IamApiService} from "../../../iam/services/iam-api.service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile-edition',
  templateUrl: './profile-edition.component.html',
  styleUrl: './profile-edition.component.css'
})
export class ProfileEditionComponent {
  users: any = null;
  user: any = {
    id: '',
    bio: '',
    email: ''
  };

  constructor(private route: ActivatedRoute, private router: Router,private iamApiService: IamApiService) {
    this.user.id = this.route.snapshot.params['id'];
  }
  updateUser(){
    this.iamApiService.updateUser(this.user.id,this.user).subscribe((data:any)=>{
      this.users = data.data;
    })
  }
}
