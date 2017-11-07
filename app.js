
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');

//Configuration for nunjucks
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views',{noCache: true}); // point nunjucks to the proper directory for templates


const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];



var count = 0;

app.use("/",(req, res, next)=> {
	console.log("The site is loaded "+ count++ +" times")
	next();
})

app.get('/', (req, res) => {
	res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.listen(3000, () => console.log('To log in go to :"http://localhost:3000/"'))

