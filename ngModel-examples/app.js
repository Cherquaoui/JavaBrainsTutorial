var module = angular.module("ngModelExamples",[]);
module.controller("Ctrl",MainController);
function MainController($scope) {
    $scope.mytext = "Hello world";
}
