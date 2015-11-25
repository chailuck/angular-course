
var app = angular.module('mainApp.blogList', []);

app.controller('BlogpostController', function ($scope,$state,blogContent) {

  $scope.selectedBlogItem = {
    postId:"",
    postTitle:"",
    postContent:"",
    postAuthor:"",
    postDate:""
  }

  $scope.formData = {
    postId:"",
    postTitle:"",
    postContent:"",
    postAuthor:"",
    postDate:""
  };

  

  $scope.reload = function() {
    blogContent.getMessages().then(
      function(data) {
          $scope.blogs = blogContent.convertHTTPArraytoBlogs(data);
      }
    );
  }

  $scope.reload();

  $scope.postSubmit = function() {
      var isError = false;
      if ($scope.validateMessage()) {
          $scope.formData.postDate = new Date();
          blogContent.postMessage($scope.formData).then(function() {
              $scope.clearData();
              $state.go('mainApp');
              $scope.reload();
            }
          );
      }
  }

  $scope.validateMessage = function () {
      return (
        $scope.validateRequired("Title",$scope.formData.postTitle) && 
        $scope.validateRequired("Content",$scope.formData.postContent) &&
        $scope.validateRequired("Author",$scope.formData.postAuthor)
        )
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
