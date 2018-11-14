
const express = require('express');
var route = require("./Route/route");;
var app = express();
app.use('/Route', route);

const hostname = '127.0.0.1';
const port = 8001;

app
.listen(port, hostname, ()=> {
    console.log(`Server is running at http://${hostname}:${port}/`);
})

