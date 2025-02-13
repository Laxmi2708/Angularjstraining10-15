var myController = /** @class */ (function () {
    function myController($scope) {
        this.$scope = $scope;
        this.message = 'Hello from myController';
        this.users = [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'Jim', age: 35 }
        ];
        $scope.vm = this;
    }
    myController.$inject = ['$scope'];
    return myController;
}());
export { myController };
