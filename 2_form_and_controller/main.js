/*
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
*/
/*
angular.module('myApp',[]);

angular.module('myApp')
	.controller('FormController', function($scope) {
		$scope.formData = {
			name: 'Poppop',
			email: 'ttt.@test.com'
		}

		$scope.register = function() {
			alert("Registered by " + $scope.formData.name + " (" + $scope.formData.email +")")
		}
	})
*/

angular.module('myApp',[]);

angular.module('myApp')
	.controller('FormController', FormController);

function FormController($scope) {
		$scope.formData = {
			name: 'Poppop',
			email: 'ttt.@test.com'
		}

		$scope.register = function() {
			alert("Registered by " + $scope.formData.name + " (" + $scope.formData.email +")")
		}
}

