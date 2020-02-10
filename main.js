var express = require('express');
var app = express();
var bodyparser= require('body-parser');
var mysql =require('mysql');


var db = require('./config/sequelize');



app.use(express.json());
app.use(bodyparser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));



db.authenticate()
.then(()=> console.log("Database Connected..."))
.catch(err=> console.log("Error ! "+ err))


app.use(require("./controllers/connect"));


app.listen(process.env.PORT || 3000,function(){
    console.log("Server :3000");
})