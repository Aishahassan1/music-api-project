const mognoose = require('mongoose')


//Schema
const albumSchema = new mongoose.Schema({
    albumId: {
        type: Number, 
        required: true,
    },

    title: {
        type: String,
        required: true
    },

    artistId: {
        type: Number,
        required: true
    },
 });



//Model
const Album = mongoose.model('Album', albumSchema);
module.exports = { Album }
