var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var businessRouter = require('./routes/businessUsers');
var adminRouter = require('./routes/adminUsers');


require('dotenv').config({ path: require('find-config')('.env') })

const cors = require('cors');

const corsOptions = {
  origin: true,

  methods: 'GET,POST,PUT,DELETE,OPTIONS',

  credentials: true,

  optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
var app = express();
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/business/users', businessRouter);
app.use('/admin/users', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 400).json({ error: err.message });

});

module.exports = app;
