
const express = require( 'express' );
const app = express(); // creates an instance of an express application


var count=0;
app.use("/",(req, res, next)=> {
	console.log("The page is loaded "+ count++ +" times")
	next();
})
//localhost:3000/

app.get('/', (req, res) => res.send('Welcome to Express'))

app.get('/news',(req,res) => res.send('This is news!'))



app.listen(3000, () => console.log('To log in go to :"http://localhost:3000/"'))

