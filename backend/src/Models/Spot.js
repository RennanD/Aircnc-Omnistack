require('dotenv').config()

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

},{
    toJSON:{
        virtuals: true
    }
})

SpotSchema.virtual('thumbnail_url').get(function(){
    return `${process.env.URL}/files/${this.thumbnail}`
})

module.exports = model('Spot', SpotSchema)