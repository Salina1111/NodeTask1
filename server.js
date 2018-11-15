
const express = require('express');
var route = require("./Route/route");
parser= require("body-parser");
var app = express();

app.use(parser.json());
app.use('/Route', route);

const hostname = '127.0.0.1';
const port = 8001;

app
.listen(port, hostname, ()=> {
    console.log(`Server is running at http://${hostname}:${port}/`);
})

