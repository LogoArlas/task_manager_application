const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

//schema
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String}
})

//model of userSchema
const User = mongoose.model("User", userSchema)

//CRUD functions on model
//CREATE a user document
async function register(username, password, email) {
    const user = await getUser(username)
    if(user) throw Error('Username already in use')
    
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)

    const newUser = await User.create({
        username: username,
        password: hashed,
        email: email
    })

    return newUser._doc //return a document
}
//READ a user document
async function login(username, password) {
    const user = await getUser(username)
    if(!user) throw Error('User not found')

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMactch) throw Error('Wrong Password')

    return user._doc
}

//UPDATE password of a user document
async function updatePassword(id, password) {
    const user = await User.findByIdAndUpdate(id, {$set: {password: password}}, {returnDocument: 'after'})
    return user._doc
}

//DELETE a user document
async function deleteUser(id) {
    await User.deleteOne({"_id": id})
}

//helper function
async function getUser(username) {
    return await User.findOne({"username": username})
}


//export function to access in routes
module.exports = { register, login, updatePassword, deleteUser }