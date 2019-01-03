var express = require('express');
var request = require('request');
const bodyParser = require('body-parser');
const port = 2002;

var c=0;

var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({extended:true}))
var url_controller = require('./url_controller.js');
app.get('/url',url_controller.url_exists);

console.log('hello');

app.listen(port,()=>{
	console.log(`listening on port ${port}`);
})

