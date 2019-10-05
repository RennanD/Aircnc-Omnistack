const { Schema, model } = require('../database')

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    }
})

module.exports = model('User', UserSchema)