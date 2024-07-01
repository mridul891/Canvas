const { user } = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jwt')
const SECRETKEY = "ALPHAMALE"
const register = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const existinguser = user.findOne('email');
        if (existinguser) {
            res.status(401).json({ message: " User ALreay Present" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newuser = await user.create({
            email: email,
            password: hashedPassword,
            username: username
        })

        const token = jwt.sign({ email: newuser.email, id: newuser._id }, SECRETKEY)
    } catch (error) {
        console.log(error)
    }
}