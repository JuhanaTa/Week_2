'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
//read the body of http POST/PUT/PATCH/DELETE request
app.use(express.urlencoded({ extended: false }));

app.use('/catinfo', require('./routes/catRoute'));


app.listen(3000);
console.log(`Example app listening on port ${port}!`);


