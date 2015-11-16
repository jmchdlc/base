module.exports = function (app){
	//Users
	var user = require('./user.route')();
	app.use('/', user);
}