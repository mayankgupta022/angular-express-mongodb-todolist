var express = require('express');
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
        	'todolist' : docs
        });
    });
});

//Get a specific item in list
router.get('/todolist/:id', function(req, res) {
	var db = req.db;
	var id = req.params.id;
    var collection = db.get('todolist');
    collection.findOne({"id": id},{},function(e,docs){
        res.json({
        	'todoitem' : docs
        });
    });
});

module.exports = router;
