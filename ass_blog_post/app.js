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


angular.module('mainApp').service('blogContent', function() {

  this.selectedBlogItem = {
    postTitle:"",
    postContent:"",
    postAuthror:"",
    postDate:""
  };


  this.blogs = [
    {
        postTitle: "Title 1",
        postContent: "Content 1111111111111111111111111111111111111",
        postAuthor: "Pop1",
        postDate: new Date(1975, 3, 3),
    },
    {
        postTitle: "Title 2",
        postContent: "Content 22222222222222222222222222222222222",
        postAuthor: "Pop 2",
        postDate: new Date(1975, 3, 3),
    },
  ]
  
  this.postMessage = function(item) {
    this.blogs.push(item);
  }

  this.selectMessage = function(item) {
     this.selectedBlogItem = item;
  }

  this.getSelectedMessage = function() {
    var selectedBlogItem = this.selectedBlogItem;
    return selectedBlogItem;
  }

  this.clearData = function() {
    this.selectedBlogItem = {
      postTitle:"",
      postContent:"",
      postAuthror:"",
      postDate:""
    }
  }
});
    
angular.module('mainApp').service('blogHTTPService',function() {
    

});