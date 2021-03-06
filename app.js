const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const albumRouter = require('./routes/album');
const artistRouter = require('./routes/artist');
const genreRouter = require('./routes/genre');
const trackRouter = require('./routes/track');
const userRouter = require('./routes/user');
require('./middleware/auth');

mongoose.connect(process.env.MONGO_URI);

require('./middleware/auth.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', userRouter);
app.use('/api', albumRouter);
app.use('/api', artistRouter);
app.use('/api', trackRouter);
app.use('/api', genreRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.end();
});

module.exports = app;
