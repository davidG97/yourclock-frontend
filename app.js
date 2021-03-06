const express = require('express');
const app = express();
var http = require('http').createServer(app)
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))     //application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'views')));

app.set('puerto', process.env.PORT || 8080);

http.listen(app.get('puerto'), function () {
    console.log('App listening on port: '+ app.get('puerto')+' In environment: '+process.env.NODE_ENV);
});

app.use('/google030be2b97e367ddd', function(req, res){
	res.sendFile('views/google030be2b97e367ddd.html');
});