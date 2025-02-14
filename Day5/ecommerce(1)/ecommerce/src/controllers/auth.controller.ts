import * as angular from 'angular';

export class AuthController {
  static $inject = ['$scope', '$location'];
  message: string;
  users: Array<any>;
  email!: string;
  password: string | undefined;

  constructor(private $scope: IDataScope, private $location: angular.ILocationService) {
    this.message = 'Welcome ';
    this.users = [
      { name: 'Laxmipatil', email: 'laxmi@gmail.com' },
    ];
    
    $scope['data'] = this;
  }

  login() {
    // Add your login logic here
    if (this.email === 'laxmi@gmail.com' && this.password === 'password') {
      this.$location.path('/catalog');
    } else {
      alert('Invalid credentials');
    }
  }
}

//angular.module('myApp').controller('MyController', MyController);
