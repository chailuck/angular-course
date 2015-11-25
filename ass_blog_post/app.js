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


angular.module('mainApp').service('blogContent', function(blogHTTPService) {

  this.selectedBlogItem = {
    postId:"",
    postTitle:"",
    postContent:"",
    postAuthor:"",
    postDate:""
  };


  
  
  this.getMessages = function() {
    return blogHTTPService.fetch();
  }

  this.convertHTTPArraytoBlogs = function(data) {
     var returnItems = [];
     
     angular.forEach(data.data, function(value, key){
       returnItems.push({
         postId: value.id,
         postTitle: value.title,
         postContent: value.post,
         postAuthor: value.author,
         postDate: value.timestamp,
      });
    });
    
    return returnItems;
  }

this.convertBlogtoHTTP = function(data) {
    var returnItems = {
         title: data.postTitle,
         post: data.postContent,
         author: data.postAuthor,
         timestamp: data.postDate,
    };
    
    return returnItems;
  }


  this.postMessage = function(item) {
    //this.blogs.push(item);
    return blogHTTPService.push(this.convertBlogtoHTTP(item));
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
      postId:"",
      postTitle:"",
      postContent:"",
      postAuthor:"",
      postDate:""
    }
  }
});
    
angular.module('mainApp').service('blogHTTPService',function($http) {
    this.method = 'GET';
    this.url = 'http://localhost:4000/blogs';
    this.status = "";
    this.data = "";
    
    this.fetch = function() {
      var code = null;
      var response = null;

      var request = $http({method: this.method, url: this.url});
      return request;
    }

    this.push = function(data) {
      var code = null;
      var response = null;
        console.log(data);
      var request = $http({
        method: 'POST', 
        url: this.url, 
        data: data 
      });
      return request;
    }


});