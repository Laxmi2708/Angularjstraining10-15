angular.module('loginmodule')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: '/login',
                controller: 'loginController',
                controllerAs: 'ctrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }]);