var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { swaggerUI, swaggerDocs } = require('./config/swagger-config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/teams', (req, res) => { });
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/*', indexRouter);

module.exports = app;
