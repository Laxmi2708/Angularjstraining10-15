var app = angular.module('ecommerceApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'ProductController'
        })
        .when('/product/:id', {
            templateUrl: 'views/product-details.html',
            controller: 'ProductController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);