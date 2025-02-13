angular.module('app')
.controller('AuthController', function($location) {
    var vm = this;
    vm.credentials = {
        email: '',
        password: ''
    };
    vm.message = '';

    vm.login = function() {
        
        if (vm.credentials.email === 'test@example.com' && vm.credentials.password === 'password') {
            vm.message = 'Login successful!';
            $location.path('/dashboard'); 
        } else {
            vm.message = 'Invalid email or password';
        }
    };
});