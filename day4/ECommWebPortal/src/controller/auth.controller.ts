import * as angular from 'angular';

interface IAuthService {
  login(credentials: { email: string; password: string }): Promise<any>;
  logout(): void;
}

export class AuthController {
  static $inject = ['$scope', '$location', 'AuthService'];
  message: string;
  credentials: { email: string; password: string };

  constructor(
    private $scope: angular.IScope,
    private $location: angular.ILocationService,
    private AuthService: IAuthService
  ) {
    this.message = 'Please log in to continue.';
    this.credentials = { email: '', password: '' };
  }

  login() {
    this.AuthService.login(this.credentials)
      .then(response => {
        console.log('Login successful:', response);
        // Redirect to a new page after successful login
        this.$location.path('/dashboard');
      })
      .catch(error => {
        console.error('Login failed:', error);
        this.message = 'Invalid credentials. Please try again.';
      });
  }

  logout() {
    this.AuthService.logout();
    console.log('Logged out successfully');
    this.$location.path('/login');
  }
}
