var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/todolist');
});

router.get('/todolist', function(req, res) {
    var db = req.db;
    var collection = db.get('todolist');
    collection.find({},{},function(e,docs){
        res.json({
        	'todolist' : docs
        });
    });
});


module.exports = router;
