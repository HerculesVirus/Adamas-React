var express = require('express');
var path=require('path')
var app = express();
// app.use(express.static("public"))
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
var cors = require('cors'); //Connect Front end routes with Backend
const connectDB = require('./config/db'); //DB Connection 
//Connect Database
connectDB();
//routes
const categories = require('./Routes/api/categories')
const products = require('./Routes/api/products')
//cors
app.use(cors())
//Middleware
app.use(express.urlencoded({extended: true}))

// app.use('/public', express.static(path.join(__dirname, '/public/img/Category')))
app.use('/public', express.static('public'));
// app.use(express.static('public'));
// use Routes
app.use('/api', categories)
app.use('/api', products) 


app.listen(8000, function() {
  console.log('App running on port 8000');
});
