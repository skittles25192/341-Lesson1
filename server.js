var express = require('express');
var app = express();

app.use('/', require('./Routes'));



app.listen(3000, () => {console.log('server is runnning on port 3000');})