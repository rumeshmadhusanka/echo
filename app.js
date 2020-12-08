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


const epsagon = require('epsagon-frameworks');

epsagon.init({
    token: 'f15915a8-503e-4e2d-8330-8d91a8eebe69',
    appName: 'trace_echo',
    metadataOnly: false,
});

module.exports = app;
