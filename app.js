const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const routes = require('./routes');  // Importing routes
const fs = require('fs')
const path=require('path')
const mime=require('mime')
const morgan = require('morgan');

app.use(morgan('dev'));


app.use('/', routes);


//Configuration for nunjucks
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views',{noCache: true}); // point nunjucks to the proper directory for templates

//static routing using mime lookup
app.use(express.static(__dirname + '/public'))


app.listen(3000,function(){
	console.log('To log in go to :"http://localhost:3000/"');
});

