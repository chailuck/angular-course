
var app = angular.module('mainApp.blogList', []);

app.controller('BlogpostController', function ($scope,$state,blogContent) {

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

  
$scope.blogs = blogContent.blogs;

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
    blogContent.postMessage({
      postTitle: $scope.formData.postTitle,
      postContent: $scope.formData.postContent,
      postAuthor: $scope.formData.postAuthor,
      postDate: new Date(),
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
      blogContent.selectMessage(selectedBlogItem);
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
