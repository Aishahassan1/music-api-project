const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    }
})


userSchema.plugin(passportLocalMongoose)
const User = mongoose.model('User', userSchema)


module.exports = { User }

//DON'T PUT PASSWORD HERE! SECURITY RISK - PASSPORT LOCAL WILL HASH OUT THE PASSWORD