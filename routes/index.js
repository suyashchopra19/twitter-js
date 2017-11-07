const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', (req,res)=>{
	console.log('this is running')	//how to send file via a relative path or how to set a relative
	res.sendFile('/Users/suyashchopra/Desktop/Programming/2.FullStackAcademy/Junior Phase/7.twitter-js/public/stylesheets/style.css');
})

// router.use(express.static('public'))

module.exports = router;