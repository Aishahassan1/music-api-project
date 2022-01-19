
const express = require('express');
const { Album } = require('../models/album')

router.get('/album/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  Album.find({}, function (err, album) {
    if(err) {
      res.status(404).json({
        message: "album not found"
      });
    } else {
      res.json(album)
    }
  })
})


module.exports = router;