var module = angular.module("ngModelExamples",[]);
module.controller("Ctrl",MainController);
function MainController($scope) {
    $scope.textboxChange = function(){
        console.log("checkbox changed");
    }
    $scope.mytext = "";
    $scope.mycheckbox =false;
}
