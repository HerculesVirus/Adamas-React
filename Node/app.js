var express = require('express');
var app = express();

var cors = require('cors'); //Connect Front end routes with Backend
const connectDB = require('./config/db'); //DB Connection 
//Connect Database
connectDB();
//routes
const categories = require('./Routes/api/categories')
//cors
app.use(cors())
//Middleware
app.use(express.urlencoded({extended: true}))
// use Routes
app.use('/api', categories)


app.listen(8000, function() {
  console.log('App running on port 8000');
});
