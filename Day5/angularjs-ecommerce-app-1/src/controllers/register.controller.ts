export class RegisterController {
    public user: { username: string; password: string; email: string };

    constructor(private $scope: ng.IScope) {
        this.user = { username: '', password: '', email: '' };
        $scope.vm = this;
    }

    public register(): void {
        // Registration logic will go here
        console.log('User registered:', this.user);
    }
}

RegisterController.$inject = ['$scope'];