import * as angular from 'angular';
import 'angular-route';  // Make sure to include ngRoute
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';

angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'login.html',
        controller: 'AuthController as vm'
      })
      .when('/dashboard', {
        template: '<h1>Dashboard</h1>',
      })
      .otherwise({
        redirectTo: '/login'
      });
  }])
  .controller('AuthController', AuthController)
  .service('AuthService', AuthService);
