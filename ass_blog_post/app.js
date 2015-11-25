angular.module('mainApp', [
  'mainApp.blogList',
  'mainApp.blogPost',
  'mainApp.blogView',
  'ui.router'
]).config([
  '$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('mainApp', {
      url: '/',
      views: {
        'header': { templateUrl: 'blank.html' },
        'sidebar': { templateUrl: 'blank.html' },
        'content': { templateUrl: 'blogList.html'},
        'footer': { templateUrl: 'blank.html' }
      }
    });
    $urlRouterProvider.otherwise('/');
  }
]);
