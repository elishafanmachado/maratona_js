const express = require("express")

const router = express.Router()

router.get('/sign-in', (req, resp) => {
    return resp.json('Sign-in')
})

router.get('/sign-up', (req, resp) => {
    return resp.json('Sign-up')
})

module.exports = router