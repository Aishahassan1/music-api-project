const express = require('express');
const passport = require('passport');
const { Album } = require('../models/album');

const router = express.Router();

router.get('/album/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Album.findOne({ AlbumId: parseInt(req.params.id) }, (err, album) => {
    if (err) {
      res.status(404).json({
        message: 'album not found',
      });
    } else {
      res.json(album);
    }
  });
});

module.exports = router;


