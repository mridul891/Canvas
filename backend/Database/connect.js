const mongoose = require('mongoose')

export const connectdb = async () => {
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGODBCONNETIONURL}`)
        console.log(`\n Database Connected |  DB Host : ${connectioninstance.connection.host}`)
    }
    catch (error) {
        console.log("Failed To connect Databse", error)
    }
}