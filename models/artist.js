const mognoose = require('mongoose')


//Schema
const artistSchema = new mongoose.Schema({
    artistId: {
        type: Number, 
        required: true,
    },
    
    name: {
        type: String, 
        required: true,
        unique: true
    }
  
 });



//Model
const Artist = mongoose.model('Artist', artistSchema);
module.exports = { Artist }

