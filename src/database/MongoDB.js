require('dotenv').config();
const mongoose = require('mongoose')

const url = process.env.MONGODB_URL

exports.connect = async () => {
    try{
        await mongoose.connect(url)
    } catch (error) {
        console.log(error)
    }
}

