var app=angular.module("transflower", []);

app.controller("loginContoller", function($scope){
    $scope.user={email:"laxmi27patil@gmail.com", password:"Pass@2708"};
   $scope.onValidate=function(){
    if(user.email===$scope.email && user.password===$scope.password){
        console.log("welcome to the transflower portal");
    }
    else{
        console.log("Login Invalid user, please try again");
    }
   }
});
