angular.module('todoApp', [])
.controller('TodoListController', ['$scope', 'Todo', function($scope, Todo) {
    $scope.add = function() {

    };

    $scope.delete = function() {

    };

    $scope.todos = Todo.query();
}]);