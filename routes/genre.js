const express = require('express');
const passport = require('passport');
const { Genre } = require('../models/genre');

const router = express.Router();

router.get('/genre', passport.authenticate('jwt', { session: false }), (req, res) => {
  Genre.find({}, (err, genre) => {
    if (err) {
      res.status(404).json({
        message: 'genre not found',
      });
    } else {
      res.json(genre);
    }
  });
});

module.exports = router;
