var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var animalRouter = require('./routes/animal');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
const animal = require('./models/animal');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/animal', animalRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await animal.deleteMany();
  
  let instance1 = new
  animal({
    animal_Name:"Dog",
    animal_breed :"dauberman",
    animal_cost:100
  });
 instance1.save().then(()=>{
   console.log("First object saved")
 }).catch((err)=>{
   console.log(err);
 })
 
 let instance2 = new
  animal({
    animal_Name:"Cat",animal_breed :"Alex",animal_cost:150 
  });
 instance2.save().then(()=>{
   console.log("Second object saved")
 }).catch((err)=>{
   console.log(err);
 });
 
 let instance3 = new
  animal({
    animal_Name:"Horse",animal_breed :"Arew",animal_cost:200
  });
  instance3.save().then(()=>{
   console.log("Third object saved")
 }).catch((err)=>{
   console.log(err);
 });
 }
 let reseed = true;
 if (reseed) { recreateDB();}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
