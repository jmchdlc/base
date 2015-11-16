var express = require('express'),
morgan      = require('morgan');

var app = express();

if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'));	
}else if(process.env.NODE_ENV === 'production'){
	
}

app.get('/', function (req, res){
	res.send('Holaaaa');
});

module.exports = function (){
	return app;
}