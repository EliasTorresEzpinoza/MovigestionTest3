import { Component } from '@angular/core';
import {IamApiService} from "../../services/iam-api.service.service";
import {UserEntity} from "../../model/user.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-iam-login',
  templateUrl: './iam-login.component.component.html',
  styleUrl: './iam-login.component.component.css'
})
export class IamLoginComponentComponent {

  user: UserEntity = {} as UserEntity;
  error: boolean = false;
  error_msg: string = '';


  constructor(private iamApi: IamApiService, private router: Router) {}

  ngOnInit() {
    document.body.style.backgroundColor = '#303841';
  }

  ngOnDestroy() {
    document.body.style.backgroundColor = '';
  }

  login() {
    this.iamApi.findUserWithEmailAndPassword(this.user.email, this.user.password).subscribe((data:any)=>{
      const info = data[0];
      if (info === undefined) {
        this.error = true;
        this.error_msg = 'Email or Password incorrect';
      } else {
        info.type === 'businessman' ? this.router.navigate([ info.id,`home-businessman`]) : this.router.navigate([info.id,`home-carrier`]);
      }
    });
  }

  cleanCss() {
    document.body.style.backgroundColor = '';
  }
}
