const Spot = require('../Models/Spot')
const User = require('../Models/User')

module.exports = {

    async show(req, res) {
        const { user_id } = req.headers
        
        try {
            const spots = await Spot.find({user: user_id})
            return res.json(spots)
        } catch(err) {
            return res.status(404).json({msg: "Nenhum Spot encontrado!"})
        }

        
    },
}