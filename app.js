require('dotenv').config();
var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')
var sequelize = require('./db');

sequelize.sync();

app.use(express.json());
app.use('/test', test)
app.use('/api/user', require('./controllers/usercontroller'));

app.listen(3000, function(){
    console.log('App is listening on 3000')
});


