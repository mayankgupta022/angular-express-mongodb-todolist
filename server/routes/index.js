var express = require('express');
var credentials = require('../credentials');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/todolist');
});

//View all items in list
router.get('/todolist', function(req, res) {
    var db = req.db;
    var collection = db.get('todolist');
    collection.find({},{},function(e,docs){
        res.json({
        	'status' : 0,
        	'todolist' : docs
        });
    });
});

//Create a new item in list
router.post('/todolist', function(req, res) {
	var db = req.db;
	var todo = req.body.todo;
    var collection = db.get('todolist');
    collection.insert({
    	"todo": todo
    }, function(e,doc){
    	if(e) {
    		res.json({
    			'status' : 1
    		});
    	} else {
	        res.json({
	        	'status' : 0,
	        	'todoitem' : doc
	        });
	    }
    });
});

//Get a specific item in list
router.get('/todolist/:id', function(req, res) {
	var db = req.db;
	var id = req.params.id;
    var collection = db.get('todolist');
    collection.findById(id, function(e,doc){
        if(e) {
    		res.json({
    			'status' : 1
    		});
    	} else {
	        res.json({
	        	'status' : 0,
	        	'todoitem' : doc
	        });
	    }
    });
});

//Update an item in list
router.put('/todolist/:id', function(req, res) {
	var db = req.db;
	var id = req.params.id;
	var todo = req.body.todo;
    var collection = db.get('todolist');
    collection.updateById(id,{
    	$set: {
    		"todo": todo
    	}
    }, function(e,doc){
    	if(e) {
    		res.json({
    			'status' : 1
    		});
    	} else {
	        res.json({
	        	'status' : 0,
	        	'todoitem' : doc
	        });
	    }
    });
});

//Delete an item in list
router.delete('/todolist/:id', function(req, res) {
	var db = req.db;
	var id = req.params.id;
    var collection = db.get('todolist');
    collection.remove({
    	'id' : id
    }, function(e){
    	if(e) {
    		res.json({
    			'status' : 1
    		});
    	} else {
	        res.json({
	        	'status' : 0
	        });
	    }
    });
});

module.exports = router;
