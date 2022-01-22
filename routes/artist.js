const express = require('express');
const passport = require('passport');
const { Artist } = require('../models/artist');

const router = express.Router();

router.get('/artist/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Artist.findOne({ ArtistId: parseInt(req.params.id) }, (err, artist) => {
    if (err) {
      res.status(404).json({
        message: 'artist not found',
      });
    } else {
      res.json(artist);
    }
  });
});

module.exports = router;
