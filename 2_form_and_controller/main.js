var myApp = angular.module('myApp',[]);
myApp.controller('FormController', function($scope) {
	$scope.formData = {
		name: 'Poppop',
		email: 'ttt.@test.com'
	}

	$scope.register = function() {
		alert("Registered by " + $scope.formData.name + " (" + $scope.formData.email +")")
	}
})