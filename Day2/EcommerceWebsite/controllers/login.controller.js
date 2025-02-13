authmodule.controller('LoginController', function($scope, loginService,$window) {

    $scope.user = {};

debugger
    $scope.onValidate = function() {

        if ($scope.loginForm.$valid) {

            loginService.validateUser($scope.user).then(function(response) {

            document.getElementById('validation-message').innerText = 'Login successful!';
            $window.location.replace('../PRODUCTCATALOG/Getproductlist.html'); 
            }, function(error) {


                document.getElementById('validation-message').innerText = 'Invalid credentials!';
                

            });

        } else {

            document.getElementById('validation-message').innerText = 'Please fill in all required fields.';

        }

    };

});