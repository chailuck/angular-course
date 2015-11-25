var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('PromiseController', function ($timeout, $scope, $q) {



  var kfcOfficer = $q.defer();

  var prepareOrder =  $scope.prepareOrder;


  var customer = kfcOfficer.promise;

  customer.then(function(data) {
    console.log("Customer: eat them");
  },function(data){
    console.error("Customer: cancel order");
  });



  $scope.prepareOrder = setTimeout(function() {
      console.log("Officer: preparing...");
  },1000);

  $scope.fryingOrder = setTimeout(function() {
      console.log("Officer: frying...");
  },1000);


  $scope.stop = function() {
    clearTimeout(prepareOrder);
    kfcOfficer.reject("Cancel order");
  }
});

angular.module('myApp').controller('ModalController', function($scope, $uibModal) {
	$scope.open = function() {
		var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 500,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
	}
});

angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.ok = function () {
    $uibModalInstance.close('ok');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
