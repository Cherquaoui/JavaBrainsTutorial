var module = angular.module("myApp",[]);
module.controller("MainCtrl",Main);
function Main($scope) {
    $scope.userName = "";
    var date = new Date();
    $scope.myDate = date.getMilliseconds();
    $scope.updateDate = function(){
        console.log("updating date ...");
        date = new Date();
        $scope.myDate = date.getMilliseconds();
    }
}