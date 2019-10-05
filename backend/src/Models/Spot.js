const { Schema, model } = require('../database')

const SpotSchema = new Schema({
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    thumbnail: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    techs : [{
        type: String,
        required: true
    }],
    price: {
        type: Number,
        required: true
    },

})

module.exports = model('Spot', SpotSchema)