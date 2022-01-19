const mognoose = require('mongoose')


//Schema
const genreSchema = new mongoose.Schema({
    genreId: {
        type: String, 
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

"GenreId": 2,
    "Name"