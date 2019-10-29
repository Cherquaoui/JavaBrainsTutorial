var module = angular.module("nestedController",[]);
module.controller("Ctrl1",controller1);
module.controller("Ctrl2",controller2);

function controller1($scope) {
    $scope.test = "test from 1";
}

function controller2($scope) {

}