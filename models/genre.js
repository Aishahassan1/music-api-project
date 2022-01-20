const mongoose = require('mongoose')


//Schema
const genreSchema = new mongoose.Schema({
    genreId: {
        type: Number, 
        required: true,
    },

    name: {
        type: String, 
        required: true,
    },
 });



//Model
const Genre = mongoose.model('Genre', genreSchema);
module.exports = { Genre }

