const UserModel = require('../models/userModel');

exports.getAllUser = async () => {
    try {
        const result = await UserModel.find();
        console.log(result)      
    }
    catch(error) { 
        console.log(error)
    }
}

exports.registerUser = async (body) => {
    try{
        
        const newUser = new UserModel(body)
        // const result = await newUser.save()
        console.log(newUser)
    }catch(error){

    }
}