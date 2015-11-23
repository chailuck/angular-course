var app = angular.module('myApp', []);

app.controller('BookController' , function($scope) {
	$scope.books = ['HTML5','CSS','Responsive Web Design'];
	$scope.name="Scope for BookController";
/*
  $scope.addToWishList=function(book) {
      $scope.wishListCount++;
  };
*/
  
$scope.wishListCount = 0;
// use the java script instead of AngularJS, this will not trigger the changes of values.
  $scope.addToWishList=function(book) {

    setTimeout(function() { 
      $scope.wishListCount++;
    }, 0);
    console.log($scope.wishListCount);
    
    setTimeout(function() { 
    console.log("TIME" + $scope.wishListCount);
    }, 10);
    
    
      
  };
 

 /* 
  $scope.$watch('wishListCount',function(newValue,oldValue){
      console.log('called '+newValue+' times');
      if(newValue==2){
				alert('Great! You have 2 items in your wish list. Time to buy what you love. ');
			}
		});
*/


  var cancelFn = $scope.$watch('wishListCount',function(newValue,oldValue){
      console.log('called '+newValue+' times');
      if(newValue==2){
        alert('Great! You have 2 items in your wish list. Time to buy what you love. ');
        cancelFn();  // use to cancelation by calling the function returned from WATCH
      }
    });
  
  
});
