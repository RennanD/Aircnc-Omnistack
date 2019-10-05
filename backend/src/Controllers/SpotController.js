const Spot = require('../Models/Spot')
const User = require('../Models/User')

module.exports = {

    async index(req, res) {
        const { tech } = req.query
        const spots = await Spot.find({techs: tech})

        return res.json(spots)
    },

    async store(req, res) {
        const { user_id } = req.headers
        const { filename } = req.file
        const { company, price, techs } = req.body
        
        const user = await User.findById(user_id)

        if(!user) return res.status(404).json({error: "Usuário não encontrado!"})

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company, 
            price,
            techs: techs.split(',').map(tech => tech.trim())
        })

        return res.status(201).json(spot)
    }
}