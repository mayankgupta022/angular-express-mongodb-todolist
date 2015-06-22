app.factory('getTodoList', ['$http', function($http) {
  return $http.get('http://localhost:5000/')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);

app.factory('getTodo', ['$http', function($http) {
  return $http.get('http://localhost:5000/:id')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);

app.factory('newTodo', ['$http', function($http) {
  return $http.post('http://localhost:5000/')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);

app.factory('updateTodo', ['$http', function($http) {
  return $http.put('http://localhost:5000/:id')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);

app.factory('deleteTodo', ['$http', function($http) {
  return $http.delete('http://localhost:5000/:id')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);