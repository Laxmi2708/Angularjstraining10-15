class AppController {
    static $inject = ['$scope', '$location'];

    constructor(private $scope: ng.IScope, private $location: ng.ILocationService) {
        this.$scope.vm = this;
        this.message = 'Welcome to the eCommerce Application';
    }

    navigateToLogin() {
        this.$location.path('/login');
    }

    navigateToRegister() {
        this.$location.path('/register');
    }

    navigateToHome() {
        this.$location.path('/');
    }
} 

export default AppController;