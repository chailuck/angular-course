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
