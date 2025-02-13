import * as angular from 'angular';

interface IAuthService {
  login(credentials: { email: string; password: string }): Promise<any>;
  logout(): void;
}

export class AuthService implements IAuthService {
  static $inject = ['$q'];
  private isAuthenticated: boolean = false;

  constructor(private $q: angular.IQService) {}

  async login(credentials: { email: string; password: string }): Promise<any> {
    if (credentials.email === 'user@example.com' && credentials.password === 'password') {
      this.isAuthenticated = true;
      return { success: true };
    } else {
      throw { success: false };
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}
