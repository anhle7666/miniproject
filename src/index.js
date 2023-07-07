require('dotenv').config()
const express = require('express')
const database = require('./database/MongoDB')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const userRouter = require('./routes/userRouter')
const bodyParser = require('body-parser')


database.connect()
.then(() => console.log('Connected database.'))
.catch(() => console.log('Error connect to DB'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
})
app.use(bodyParser.json())
app.use('/users', userRouter)

app.listen(port, console.log(`Server started. PORT: ${port}`))