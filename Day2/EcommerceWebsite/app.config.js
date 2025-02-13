angular.module('authmodule')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'login.html',
                controller: 'LoginController',
                controllerAs: 'ctrl'
            })
            .when('/productlist', {
                templateUrl: 'Getproductlist.html',
                controller: 'productController',
                controllerAs: 'ctrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }]);