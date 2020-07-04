const express = require("express")

const { Account } = require('../models')

const bcrypt = require('bcrypt')

const router = express.Router()

const saltRounds = 10

router.get('/sign-in', (req, resp) => {
    return resp.json('Sign-in')
})

router.get('/sign-up', async (req, resp) => {
    const email = "elishafan.machado@gmail.com"
    const password = "123456"

   
    const hash = bcrypt.hashSync(password, saltRounds)

    const result = await Account.create({ email, password: hash })
    console.log(hash)
    return resp.json(result)
})

module.exports = router