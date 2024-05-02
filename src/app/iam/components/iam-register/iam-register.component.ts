import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-iam-register',
  templateUrl: './iam-register.component.html',
  styleUrl: './iam-register.component.css'
})
export class IamRegisterComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    document.body.style.backgroundColor = '#303841';
  }

  ngOnDestroy() {
    document.body.style.backgroundColor = '';
  }

  cleanCss() {
    document.body.style.backgroundColor = '';
  }

  typeSelection(type: string) {
    console.log(type);
  }

  goToRegisterUserInformation(type: string) {
    this.router.navigate(['register', type]);
  }
}
