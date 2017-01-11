var app = angular.module('myApp', ['ngRoute','ngAnimate', 'ngTouch', 'ui.bootstrap']);

app.controller("bettingController", [ '$scope', function ($scope) {
    $scope.msg = "Betting";

}]);
// var app = angular.module('myApp', ['ngAnimate']);
