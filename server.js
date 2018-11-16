
const express = require('express');
var route = require("./Route/route");

const mongoose = require('mongoose');

//Connect to mongoDb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open',function(){
    console.log('Connection has been made, now make fireworks!')
}).on('error',function(error){
    console.log('Connection error:',error);
})

parser= require("body-parser");
var app = express();

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(parser.json());
app.use('/Route', route);

const hostname = '127.0.0.1';
const port = 8001;

app
.listen(port, hostname, ()=> {
    console.log(`Server is running at http://${hostname}:${port}/`);
})

