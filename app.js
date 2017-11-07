
const express = require( 'express' );
const app = express(); // creates an instance of an express application

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
	next();
})
//localhost:3000/

app.get('/', (req, res) => res.send('Welcome to Express'))

app.get('/news', (req, res) => res.send('This is news!'))

app.get('/special', (req, res) => res.send('This is a special area!'));

app.get('/special/:id', (req, res) => res.send('This is special area ' + req.params.id + '.'));

app.use("/",(req, res) => res.send('404 Page Not Found'));

app.listen(3000, () => console.log('To log in go to :"http://localhost:3000/"'))

