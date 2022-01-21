const mongoose = require('mongoose')


//Schema
const artistSchema = new mongoose.Schema({
    ArtistId: {
        type: Number, 
        required: true,
    },
    
    Name: {
        type: String, 
        required: true,
        unique: true
    }
  
 });



//Model
const Artist = mongoose.model('Artist', artistSchema);
module.exports = { Artist }

