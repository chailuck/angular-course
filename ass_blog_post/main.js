
var app = angular.module('myApp', []);

app.controller('BlogpostController', function ($scope) {
  $scope.blogs = [  
    {
        title: "Title 1",
        content: "Content 1111111111111111111111111111111111111",
        author: "Twin PanichSombat",
        postdate: new Date(1975, 3, 3),
    },
    {
        title: "Title 2",
        content: "Content 22222222222222222222222222222222222",
        author: "Pop",
        postdate: new Date(1975, 3, 3),
    },
  ]
	
  $scope.postSubmit = function() {
      var isError = false;
      console.log($scope.postTitle);
      
     
      if (
        $scope.validateRequired("Title",$scope.postTitle) && 
        $scope.validateRequired("Content",$scope.postContent) &&
        $scope.validateRequired("Author",$scope.postAuthor)
      ) {
          $scope.blogs.push({
            title: $scope.postTitle,
            content: $scope.postContent,
            author: $scope.postAuthor,
            postdate: new Date(),
          })  
          $scope.clearData();
      }
  }
  
  $scope.clearData = function() {
    $scope.postTitle = "";
    $scope.postContent = "";
    $scope.postAuthor = "";  
  }

  $scope.validateRequired = function(fieldName, fieldVal) {
      if ((fieldVal) === undefined) {
          alert(fieldName + " is required field"); 
          return false;
      } 
      return true;
  }

});


app.filter('LimitText', function() {
    return function(input) {
      if (input.length >= 10)
        return input.substr(0,10) + "...";
      return input;
    }
});
