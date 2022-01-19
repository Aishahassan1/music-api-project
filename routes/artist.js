const express = require('express');
const { Artist } = require('../models/artist')

router.get('/artist/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  Artist.find({}, function (err, artist) {
    if(err) {
      res.status(404).json({
        message: "artist not found"
      });
    } else {
      res.json(artist)
    }
  })
})


module.exports = router;