const mognoose = require('mongoose')


//Schema
const trackSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    albumId: {
        type: Number, 
        required: true,
    },
    genreId: {
        type: Number, 
        required: true,
    },
    composer: {
        type: String, 
        required: true,
    },
    duration: {
        type: Number, 
        required: true,
    },
    size: {
        type: Number, 
        required: true,
    },
    price: {
        type: Number, 
        required: true,
    },
 });



//Model
const Track = mongoose.model('Track', trackSchema);
module.exports = { Track }