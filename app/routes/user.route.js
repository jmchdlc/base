var router = require('express').Router();
 
var userCtrl = require('../controllers/user.controller');

module.exports = function (){
	router.route('/')
		.get(userCtrl.list);

	return router;
}