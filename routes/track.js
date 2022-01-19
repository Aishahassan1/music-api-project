
const express = require('express');
const { Track } = require('../models/track');



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


module.exports = router;