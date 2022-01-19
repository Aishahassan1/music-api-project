
const express = require('express');
const { Genre } = require('../models/genre');

router.get('/genre', passport.authenticate('jwt', {session: false}), (req, res) => {
  Genre.find({}, function (err, genre) {
    if(err) {
      res.status(404).json({
        message: "genre not found"
      });
    } else {
      res.json(genre)
    }
  })
});


module.exports = router;