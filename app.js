
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const auth = require('./auth'); //shorthand for ./auth/index.js
const users = require("./routes/user")
const antipodes = require("./routes/antipode")


const app = express();

// const URL = "https://dialoc-e341d.firebaseapp.com/";
// const URL = "http://localhost:8080";


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: process.env.CORS_ORIGIN, // change to the firebase client front end to set the cookie
  credentials: true
}));

app.use('/auth', auth);
app.use('/users', users);
app.use('/antipodes', antipodes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: `${err.message} ☔️`,
    error: res.locals.error = req.app.get('env') === 'development' ? err : {}
  })
});

module.exports = app;
