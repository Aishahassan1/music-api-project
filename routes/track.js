
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
  if (req.body.Name && req.body.Price && req.body.AlbumId && req.body.GenreId && req.body.Composer && req.body.Duration && req.body.Size && req.body.MediaTypeId && req.body.TrackId) {
      const product = new Track({
          Name: req.body.Name,
          Price: req.body.Price,
          AlbumId: req.body.AlbumId,
          GenreId: req.body.GenreId,
          Composer: req.body.Composer, 
          Duration: req.body.Duration,
          Size: req.body.Size,
          MediaTypeId: req.body.MediaTypeId,
          TrackId: req.body.TrackId
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