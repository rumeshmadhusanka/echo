const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
let cmd = require('./routes/cmd');
let call = require('./routes/call')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/health', usersRouter);
app.use('/cmd',cmd)
app.use('/call',call);
app.use('*', indexRouter);


module.exports = app;
