const mongoose = require('mongoose')
const {Schema } = mongoose

const UserSchema = new Schema({
    username: String,
    password: String,
    role: { type: String, default: 'user'},
    address: String,
    email:String,
    phone: Number,
})

const UserModel = mongoose.model('Users', UserSchema)

module.exports = UserModel