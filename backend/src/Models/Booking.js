const { Schema, model } = require('../database')

const BookingSchema = new Schema({
    date: {
        type: String,
        required: true
    },

    approved: {
        type: Boolean,
    },
    user_booking: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    spot_booking: {
        type: Schema.Types.ObjectId,
        ref: 'Spot'
    }
})

module.exports = model('Booking', BookingSchema)