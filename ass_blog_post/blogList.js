
var app = angular.module('mainApp.blogList', []);

app.controller('BlogpostController', function ($scope,$state) {

  $scope.selectedBlogItem = {
    postTitle:"",
    postContent:"",
    postAuthro:""
  }

  $scope.formData = {
    postTitle:"",
    postContent:"",
    postAuthro:""
  }

  $scope.blogs = [
    {
        title: "Title 1",
        content: "Content 1111111111111111111111111111111111111",
        author: "Pop1",
        postdate: new Date(1975, 3, 3),
    },
    {
        title: "Title 2",
        content: "Content 22222222222222222222222222222222222",
        author: "Pop 2",
        postdate: new Date(1975, 3, 3),
    },
  ]
	
  $scope.postSubmit = function() {
      var isError = false;
      if ($scope.validateMessage()) {
          $scope.postMessage();
          $scope.clearData();
          $state.go('mainApp');
      }
  }

  $scope.validateMessage = function () {
      return (
        $scope.validateRequired("Title",$scope.formData.postTitle) && 
        $scope.validateRequired("Content",$scope.formData.postContent) &&
        $scope.validateRequired("Author",$scope.formData.postAuthor)
        )
  }

  $scope.postMessage = function() {
      $scope.blogs.push({
        title: $scope.formData.postTitle,
        content: $scope.formData.postContent,
        author: $scope.formData.postAuthor,
        postdate: new Date(),
      })  
  }
  
  $scope.clearData = function() {
    $scope.formData.postTitle = "";
    $scope.formData.postContent = "";
    $scope.formData.postAuthor = "";  
  }

  $scope.validateRequired = function(fieldName, fieldVal) {
      if ((fieldVal) === undefined || (fieldVal) === "") {
          alert(fieldName + " is required field"); 
          return false;
      } 
      return true;
  }

  $scope.blogListSelected = function(selectedBlogItem) {
      $scope.selectedBlogItem = selectedBlogItem;
      console.log(selectedBlogItem);
      console.log($scope.selectedBlogItem);
      $state.go('mainApp.blogView');
  }
});

app.filter('LimitText', function() {
  return function(input) {
    var contentLen = 10;
    if (input != undefined) {
      if (input.length > contentLen)
        return input.substr(0,contentLen) + "...";
      return input;
    }
  }
});
