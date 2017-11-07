
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');

//Configuration for nunjucks
var local = {
	title:'An Example',
	
	person:[
	
	{name:'Gandalf'},
	{name:'Frodo'},
	{name:'Hermione'}
	
	]

};

// localhost:3000/index.html
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views',{noCache: true}); // point nunjucks to the proper directory for templates


nunjucks.render('index.html',local,function(err,output){
	console.log(output);
});

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// res.render( 'index', {title: 'Hall of Fame', people: people} );
// app.set('title', 'index.html');


// Come back to volleyball and morgan, given time

var count=0;

// app.use((err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')  ASK how this works on server side
// }) 

app.use("/",(req, res, next)=> {
	console.log("The site is loaded "+ count++ +" times")
	console.log('Request Type:', req.method)
	console.log('Request URL:', req.originalUrl)
	console.log('Status Code: ', res.status(200).statusCode); // ASK diff between res.status vs. res.sendStatus
	// res.render('index.html')
	res.render( 'index', {title: 'Hall of Fame', people: people} );
	next();
})
//localhost:3000/

// app.get('/', (req, res) => res.send('Welcome to Express'))

// app.get('/', function(req, res) {
//     res.render('index.html');
// });


app.get('/news', (req, res) => res.send('This is news!'))

app.get('/special', (req, res) => res.send('This is a special area!'));

app.get('/special/:id', (req, res) => res.send('This is special area ' + req.params.id + '.'));

// app.get('/index.html',(req,res) => res.sendView('title',{title:'Hello World'}))

app.use("/",(req, res) => res.send('404 Page Not Found'));

app.listen(3000, () => console.log('To log in go to :"http://localhost:3000/"'))

