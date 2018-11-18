
const express = require('express');
var route = require("./Route/route");
var route1 = require("./Route/promiseRoute");
var asyncRoute = require("./Route/asyncAwaitRoute");
var parser= require("body-parser");
var app = express();

const mongoose = require('mongoose');;

//Connect to mongoDb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open',function(){
    console.log('Connection has been made, now make fireworks!')
}).on('error',function(error){
    console.log('Connection error:',error);
})

app.use(parser.json());
//app.use('/route', route);
app.use('/route', route1);
app.use('/async', asyncRoute);

const hostname = '127.0.0.1';
const port = 8001;

app
.listen(port, hostname, ()=> {
    console.log(`Server is running at http://${hostname}:${port}/`);
})

