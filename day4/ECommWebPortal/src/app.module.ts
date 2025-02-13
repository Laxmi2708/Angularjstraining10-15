import * as angular from 'angular';  // Import AngularJS
import 'angular-route';              // Import ngRoute for routing
import { AuthController } from './controller/auth.controller';  // Import your AuthController
import { AuthService } from './service/auth.service';  // Correct relative path
  

// Define the app module and configure routes
angular.module('app', ['ngRoute'])
  .config(['$routeProvider', ($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider
      .when('/login', {
        templateUrl: 'login.html',      // Template for the login page
        controller: 'AuthController as vm'  // Attach the controller to this route
      })
      .when('/dashboard', {
        template: '<h1>Dashboard</h1>',  // This could be a separate HTML file for the dashboard
      })
      .otherwise({
        redirectTo: '/login'  // Default route if no matching route is found
      });
  }])
  .controller('AuthController', AuthController)  // Register the AuthController
  .service('AuthService', AuthService);  // Register the AuthService
