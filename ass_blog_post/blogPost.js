angular.module('mainApp.blogPost', ['ui.router']).config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('mainApp.blogPost', {
      url: 'blogPost',
      views: {
        'content@': { templateUrl: 'blogPost.html' },
      }
    });
  }
]);
