var express = require('express');
var router = express.Router();
const { User } = require('../models/user');



router.post('/register', function(req, res, next)  {
    if (req.body.username && req.body.password) {
      res.status(201).json({message: 'user created'});
    } else {
      res.status(400).json({message: 'expected username and password'});
    }
  })

  router.post('/login', function(req, res, next)  {
    if (req.body.username && req.body.password) {
      res.status(201).json({message: 'user created'});
    } else {
      res.status(400).json({message: 'expected username and password'});
    }
  })

  module.exports = router;
