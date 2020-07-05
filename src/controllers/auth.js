const express = require("express")

const { Account } = require('../models')

const bcrypt = require('bcrypt')

const router = express.Router()

const saltRounds = 10

router.get('/sign-in', (req, resp) => {
    return resp.json('Sign-in')
})

router.get('/sign-up', async (req, res) => {

    const {email, password} = req.body

    console.log({email, password})

    const account = await Account.findOne({where: { email }})
    
    if(account) return res.jsonBadRequest(null, 'Account already exists')

    const hash = bcrypt.hashSync(password, saltRounds)

    const newAccount = await Account.create({ email, password: hash })
    
    return res.jsonOK({newAccount})
})

module.exports = router