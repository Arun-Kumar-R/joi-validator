const express = require('express');
const bodyParser = require('body-parser');

// @Custom files
const env = require('./config/env');

// Custom APIs
const AddEmployee = require('./Api/index');

// @express app initialization
const app = express();

// @middleware body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/employee', AddEmployee);

// @setup Port
const PORT = env.apiPort;

// @listen port
app.listen(PORT, () => {
    console.log('Magic Happens on Port: ' + PORT);
});


