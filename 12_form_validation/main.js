var app = angular.module('myApp', []);

app.controller('RegisterController', function ($scope) {
	

   $scope.register = function(isValid) {
    	$scope.myForm.nameField.$setValidity('unique',false);
   }
  
});
