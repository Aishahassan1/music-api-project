
const express = require('express');
const { Track } = require('../models/track');
const passport = require('passport') 

const router = express.Router()

router.get('/track/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  Track.findOne({TrackId: parseInt(req.params.id)}, function (err, track) {
    if(err) {
      res.status(404).json({
        message: "track not found"
      });
    } else {
      res.json(track)
    }
  })
});

router.post('/track', passport.authenticate('jwt', {session: false}), async (req, res) => {
  if (req.body.name && req.body.price && req.body.albumId && req.body.genreId && req.body.composer && req.body.duration && req.body.size && req.body.mediaTypeId && req.body.TrackId) {
      const product = new Track({
          Name: req.body.name,
          Price: req.body.price,
          AlbumId: req.body.albumId,
          GenreId: req.body.genreId,
          Composer: req.body.composer, 
          Duration: req.body.duration,
          Size: req.body.Size,
          MediaTypeId: req.body.mediaTypeId,
          TrackId: req.body.trackId
      })
      try {
          const newTrack = await product.save()
          res.status(201).json(newTrack)
      } catch (err) {
          res.status(400).json({ message: err })
      }
  } else {
      res.status(400).json({ message: "expected full track details" })
  }
})

module.exports = router;