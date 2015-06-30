app.controller('TodoController', ['$scope', 'Todo', function($scope, Todo) {
    var getTodoList = function() {
	    Todo.getTodoList(function(data) {
	    	$scope.todos = data.todolist;
	    });
    };

    $scope.add = function(todo) {
    	var todo = {
    		todo: $scope.todo
    	};

    	$scope.todo = "";

    	Todo.newTodo(todo, function(data) {
			console.log("saved");
			$scope.$apply();
			getTodoList();
    	});
    };

    $scope.delete = function(todo) {
    	Todo.deleteTodo(todo, function(data) {
			console.log("deleted");
			$scope.$apply();
			getTodoList();
    	});
    };

    var getTodoList = function() {
	    Todo.getTodoList(function(data) {
	    	$scope.todos = data.todolist;
	    });
    };

	getTodoList();
}]);