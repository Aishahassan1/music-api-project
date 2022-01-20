const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const passport = require('passport') //--> NEEDED IN AUTHENTICATION STAGE
const albumRoutes = require('./routes/album')
const passportLocalMongoose = require('passport-local-mongoose') ;
const artistRoutes = require('./routes/artist');
const genreRoutes = require('./routes/genre');
const trackRoutes = require('./routes/track');
const userRouter =  require('./routes/user'); 
// const swaggerDocument = require('./swagger.json'); --> I KNOW I WILL NEED THIS FOR DOCUMENTATION BUT WILL I NEED THE OHTER ONE SINCE THERE WILL BE  NO USER INTERFACE?
// const swaggerUi = require('swagger-ui-express'); --> not necessary unless you want a user interface for your documentation
require('./middleware/auth.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/user', userRouter); 




app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
