const express = require('express');
const router = express.Router();

// CUSTOM MODULES
const AddEmployee = require('./employee');

// USERS ROUTES 
router.post('/create-employee', AddEmployee);


module.exports = router;
