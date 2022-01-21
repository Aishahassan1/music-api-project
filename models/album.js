const mongoose = require('mongoose')


//Schema
const albumSchema = new mongoose.Schema({
    AlbumId: {
        type: Number, 
        required: true,
    },

    Title: {
        type: String,
        required: true
    },

    ArtistId: {
        type: Number,
        required: true
    },
 });



//Model
const Album = mongoose.model('Album', albumSchema);
module.exports = { Album }
