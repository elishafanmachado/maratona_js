const express = require('express')

const app = express()

app.get('/', (req, resp) => {
    return resp.json('Api Running...')
})

app.listen(3001, () => {
    console.log('Listening on port 3001')
})

