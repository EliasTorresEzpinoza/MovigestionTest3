import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserEntity } from '../../model/user.entity';
import { ActivatedRoute, Router } from '@angular/router';
import { IamApiService } from '../../services/iam-api.service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-iam-register-user-info',
  templateUrl: './iam-register-user-info.component.html',
  styleUrls: ['./iam-register-user-info.component.css']
})
export class IamRegisterUserInfoComponent implements OnInit, OnDestroy {
  user: UserEntity = {} as UserEntity;
  error: boolean = false;
  error_msg: string = '';
  privacityPolicy: boolean = false;
  passwordConfirmation: string = '';

  constructor(private route: ActivatedRoute, private iamApi: IamApiService, private router: Router) {
    this.user.type = this.route.snapshot.params['type'];
  }

  ngOnInit() {
    document.body.style.backgroundColor = '#303841';
  }

  ngOnDestroy() {
    document.body.style.backgroundColor = '';
  }

  async createdUser() {
    await this.errors();

    if (!this.error) {
      const json = {
        name: this.user.name,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
        type: this.user.type
      };

      this.iamApi.createUser(json).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/register/successfully']);
      });
    }
  }

  async errors() {
    this.error = false;
    this.error_msg="";

    const emailCheck: Observable<any> = this.iamApi.findUserWithEmail(this.user.email);
    const emailCheckResult = await emailCheck.toPromise();

    if (emailCheckResult[0] !== undefined) {
      this.error = true;
      this.error_msg = 'Email already registered';
    }

    if (!this.privacityPolicy) {
      this.error = true;
      this.error_msg = 'Accept privacy policy please';
    }

    if (this.user.password !== this.passwordConfirmation) {
      this.error = true;
      this.error_msg = 'Passwords do not match';
    }
  }
}
