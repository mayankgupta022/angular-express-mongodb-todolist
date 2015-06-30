app.service('getTodo', ['$http', function($http) {
	return $http.get('http://localhost:3000/todolist/:id')
	.success(function(data) {
		return data;
	})
	.error(function(data) {
		return data;
	});
}]);

app.service('Todo', ['$http', function($http) {
	this.getTodoList = function(success) {
		return $http.get('http://localhost:3000/todolist/')
		.success(success)
		.error(function(data) {
			return data;
		});
	};

	this.newTodo = function(todo, success) {
		$http.post('http://localhost:3000/todolist/', todo)
		.success(success)
		.error(function(data) {
			return data;
		});
	};

	this.deleteTodo = function(todo, success) {
		$http.delete('http://localhost:3000/todolist/' + todo._id)
		.success(success)
		.error(function(data) {
			return data;
		});
	};
}]);

app.service('updateTodo', ['$http', function($http) {
	return $http.put('http://localhost:3000/todolist/:id', todo)
	.success(function(data) {
		return data;
	})
	.error(function(data) {
		return data;
	});
}]);