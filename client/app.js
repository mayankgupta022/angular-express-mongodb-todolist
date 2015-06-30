var app = angular.module('TodoApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'TodoController',
    	templateUrl: 'views/todo.html'
  	});
  	// .otherwise({
   //  	redirectTo: '/'
  	// });
});