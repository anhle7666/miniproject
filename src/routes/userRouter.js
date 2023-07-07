const express = require ('express')
const userController = require('../controllers/userController')
const router = express.Router();

router.get('/', async (req, res) => {
    const result = await userController.getAllUser()
    res.send(result)
})

router.post('/auth/register', async (req, res, next) => {
    try {
        const result = await userController.registerUser(req.body)
        res.send(result)
    }
    catch(error) {
        next()
    }
})


module.exports = router