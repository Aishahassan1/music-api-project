
const express = require('express');
const { Track } = require('../models/track');
const passport = require('passport') 

const router = express.Router()

router.get('/track/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  Track.find({}, function (err, track) {
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
  if (req.body.name && req.body.price && req.body.albumId && req.body.genreId && req.body.composer && req.body.duration && req.body.size ) {
      const product = new Track({
          name: req.body.name,
          price: req.body.price,
          albumId: req.body.albumId,
          genreId: req.body.genreId,
          composer: req.body.composer, 
          duration: req.body.duration,
          size: req.body.size
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