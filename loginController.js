	var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
	  $scope.email = "a@b.com";
	  $scope.password = "12345678";
	});