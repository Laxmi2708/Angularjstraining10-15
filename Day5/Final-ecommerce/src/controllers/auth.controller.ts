import * as angular from 'angular';
import { Authservice } from '../services/auth.service';

export class AuthController {
  static $inject = ['$scope', '$location','Authservice'];
  
  message: string;
  authUsers: Array<any>;

  public username: string;
  public password: string;

  constructor(private $scope: IDataScope, private $location: angular.ILocationService,private authservice : Authservice) {
    this.message = "";
    this.username = "";
    this.password = "";

    // Sample users with email and password
    this.authUsers = [
      { email: 'laxmi27patil@gmail.com', password: "Pass@2708" },
      { email: ' abc@gmail.com ', password: "abc123" },
      
    ];

    $scope['data'] = this;
  }

  public login(): void {
    const isValidUser = this.authservice.validateUser(this.username, this.password);

    if (isValidUser) {
      this.message = 'Login Successful';
      
      this.$location.path('/product'); // Redirect to catalog page
    } else {
      this.message = 'Invalid credentials';
    }
}

}
