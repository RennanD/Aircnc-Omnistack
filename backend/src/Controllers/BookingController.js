const Booking = require('../Models/Booking')


module.exports = {
    async store(req, res) {
        const { user_id } = req.headers
        const { spot_id } = req.params
        const { date } = req.body
        
        try{

            const booking = await Booking.create({
                user_booking: user_id,
                spot_booking: spot_id,
                date
            })

            await booking.populate('user_booking').populate('spot_booking').execPopulate()

            return res.status(201).json(booking)

        } catch(err) {
            return res.status(400).json({
                error: "Não foi possível reservar o spot, verifique se a data está desponível."
            })
        }
    }
    
}