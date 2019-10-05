const User = require('../Models/User')

module.exports = {
    
    async store(req, res) {
        const { email } = req.body
        
        try {
            let user = await User.findOne({ email })

            if(!user) 
                await User.create({ email })

            return res.status(201).json(user)

        } catch(err){
            return res.status(400).json({msg: "Preencha com um e-mail válido!"})
        }

        
    }

}