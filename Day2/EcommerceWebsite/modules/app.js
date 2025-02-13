//1.Define the module
//import {credentials} from '../Seconddraft/Scripts/dal/credentials.js';
var app = angular.module('authmodule', []);
var controller = app.controller('loginController', function($scope){
    //define the model
    // Initialize the user model with empty emailid and password
    debugger

    $scope.credentials = [
       
            {
                emailId: 'user1@example.com',
                password: 'password123'
            },
            {
                emailId: 'user2@example.com',
                password: 'password456'
            },
            {
                emailId: 'user3@example.com',
                password: 'password789'
            }
        
    ];
      
    
    debugger
    $scope.onValidate = function(){
        debugger
        const user = credentials.find(cred => cred.emailid === $scope.user.emailid && cred.password === $scope.user.password);
        if(user){
            console.log("Login Success");
        }
        else{
            console.log("Login Failed");
        }
    }
});