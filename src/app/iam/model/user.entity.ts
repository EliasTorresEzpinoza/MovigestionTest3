export class UserEntity {
  id: any;
  email: string;
  password: string;
  type: string;
  name: string;
  lastName: string;
  constructor() {
    this.email='';
    this.password='';
    this.type='';
    this.name='';
    this.lastName ='';
  }

}
