const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { title: 'Twitter.js', tweets:tweets} );
});

router.get('/stylesheets/style.css', (req,res)=>{
	console.log('this is running')	//how to send file via a relative path or how to set a relative
	res.sendFile('/stylesheets/style.css',{root:__dirname +'/../public/'});
})



router.use(express.static('public'))

module.exports = router; 