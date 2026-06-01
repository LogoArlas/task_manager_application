const express = require("express")
const User = require("../models/user")
const router = express.Router()
const logger = console

router.get("/", (req, res) => {
    try {
        const users = User.getUsers()
        res.send(users)
    } catch(err) {
        logger.error(err)
        res.status(500).send({message: "Internal Server Error"})
    }
})

module.exports = router