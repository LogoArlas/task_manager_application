const express = require("express")
const User = require('../models/user')
const router = express.Router()

router
    .post('/login', async (req, res) => {
        try{
            const user = await User.login(req.body.username, req.body.password)
            res.send({...user, password: undefined}) //send user to the frontend
        } catch(error) {
            res.status(401).send({message: error.message})
        }
    })

    .post('/register', async(req, res) => {
        try{
            const user = await User.register(req.body.username, req.body.password, req.body.email)
            res.send({...user, password: undefined})
        } catch(error) {
            res.status(401).send({message: error.message})
        }
    })

    .put('/updatePassword', async(req, res) => {
        try {
            const user = await User.updatePassword(req.body.id, req.body.password)
            res.send({...user, password: undefined})
        } catch(error) {
            res.status(401).send({message: error.message})
        }
    })

    .delete('/delete', async (req, res) => {
        try{
            await User.deleteUser(req.body.id)
            res.send({success: "Account deleted" })
        } catch(error) {
           res.status(401).send({message: error.message}) 
        }
    })

//export router to use in index.js
module.exports = router