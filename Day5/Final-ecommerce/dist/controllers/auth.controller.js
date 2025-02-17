var AuthController = /** @class */ (function () {
    function AuthController($scope, $location, authservice) {
        this.$scope = $scope;
        this.$location = $location;
        this.authservice = authservice;
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
    AuthController.prototype.login = function () {
        var isValidUser = this.authservice.validateUser(this.username, this.password);
        if (isValidUser) {
            this.message = 'Login Successful';
            this.$location.path('/product'); // Redirect to catalog page
        }
        else {
            this.message = 'Invalid credentials';
        }
    };
    AuthController.$inject = ['$scope', '$location', 'Authservice'];
    return AuthController;
}());

