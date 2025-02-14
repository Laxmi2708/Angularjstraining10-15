var AuthController = /** @class */ (function () {
    function AuthController($scope, $location) {
        this.$scope = $scope;
        this.$location = $location;
        this.message = 'Welcome to TypeScript!';
        this.users = [
            { name: 'patil laxmi', email: 'laxmi@gmail.com' },
        ];
        $scope['data'] = this;
    }
    AuthController.prototype.login = function () {
        if (this.email === 'laxmi@gmail.com' && this.password === 'password') {
            this.$location.path('/catalog');
        } else {
            alert('Invalid credentials');
        }
    };
    AuthController.$inject = ['$scope', '$location'];
    return AuthController;
}());

//angular.module('myApp').controller('MyController', MyController);
