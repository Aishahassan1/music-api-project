const mongoose = require('mongoose')


//Schema
const genreSchema = new mongoose.Schema({
    GenreId: {
        type: Number, 
        required: true,
    },

    Name: {
        type: String, 
        required: true,
    },
 });



//Model
const Genre = mongoose.model('Genre', genreSchema);
module.exports = { Genre }

