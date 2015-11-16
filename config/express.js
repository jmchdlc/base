var express = require('express'),
morgan      = require('morgan');

var app = express();

if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'));	
}else if(process.env.NODE_ENV === 'production'){

}

//Load router
require('../app/routes/main.route')(app);

module.exports = function (){
	return app;
}