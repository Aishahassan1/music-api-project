const mongoose = require('mongoose')


const trackSchema = new mongoose.Schema({
    Name: {
        type: String, 
        required: true,
    },
    AlbumId: {
        type: Number, 
        required: true,
    },
    GenreId: {
        type: Number, 
        required: true,
    },
    Composer: {
        type: String, 
        required: true,
    },
    Duration: {
        type: Number, 
        required: true,
    },
    Size: {
        type: Number, 
        required: true,
    },
    Price: {
        type: Number, 
        required: true,
    },
    MediaTypeId: {
        type: Number, 
        required: true,
    },
    TrackId: {
        type: Number, 
        required: true,
    }
 });


const Track = mongoose.model('Track', trackSchema);
module.exports = { Track }

