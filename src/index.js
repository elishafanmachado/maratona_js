const express = require('express')

const authController = require('./controllers/auth')

const app = express()

app.use('/auth', authController)

app.get('/', (req, resp) => {
    return resp.json('Api Running...')
})

app.listen(3001, () => {
    console.log('Listening on port 3001')
})

