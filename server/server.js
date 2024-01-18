const createError = require('http-errors');
const express = require('express');
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const CONNECTION_STRING = process.env.CONNECTION_STRING;

const indexRouter = require('./routes/indexRoutes');
const postsRouter = require('./routes/postRoutes');
const commentsRouter = require('./routes/commentRoutes');

const app = express();

// setup connection to mongo
mongoose.connect(CONNECTION_STRING);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);

// Return the client
app.get('/posts*', (_, res) => {
  res.sendFile(path.join(__dirname, 'public') + '/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;