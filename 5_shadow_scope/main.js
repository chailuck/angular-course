var app = angular.module('myApp', []);

/*
app.controller('ParentController', function ($scope, $rootScope) {
	//$scope.name = "Parent";
	//
	//$scope.reset = function () {
	//	$scope.name = "Parent";
	//};

});
*/

app.controller('ParentController', function ($scope, $rootScope) {
	$scope.data = {name: "Parent"};

});


app.controller('ChildController', function ($scope, $rootScope) {

	$scope.reset = function () {
		$rootScope.name = "Reset By Child";
	};

});
