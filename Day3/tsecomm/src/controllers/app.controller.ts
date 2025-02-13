import angular from "angular";

interface ICustomeScope extends angular.IScope {
    vm: any;
}
export class myController {
    static $inject = ['$scope'];
    message:string;
    users:Array<any>;
    constructor(private $scope:ICustomeScope) {
        this.message = 'Hello from myController';
        this.users = [
            {name: 'John', age: 25},
            {name: 'Jane', age: 30},
            {name: 'Jim', age: 35}
        ];
        $scope.vm = this;
    }


  }

  