angular.module('mainApp.blogView', ['ui.router']).config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('mainApp.blogView', {
      url: 'blogView',
      views: {
        'content@': { templateUrl: 'blogView.html' },
      }
    });
  }
]);

angular.module('mainApp.blogView').controller('blogViewController', function ($scope,$state,blogContent) {	
	$scope.selectedBlogItem = blogContent.getSelectedMessage();
});
