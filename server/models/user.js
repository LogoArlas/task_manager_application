const mongoose = require("mongoose")

//schema
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String}
})

//model of schema
const User = mongoose.model("User", userSchema)

//CRUD functions on model
//CREATE a user
async function register(username, password, email) {
    const user = await getUser(username)
    if(user) throw Error('Username already in use')
    
    const newUser = await User.create({
        username: username,
        password: password,
        email: email
    })

    return newUser._doc
}
//READ a user
async function login(username, password) {
    const user = await getUser(username)
    if(!user) throw Error('User not found')
    if(user.password != password) throw Error('Wrong Password')

    return user._doc
}

//UPDATE
async function updatePassword(id, password) {
    const user = await User.findByIdAndUpdate(id, {password}, {new: true})
    return user._doc
}

//DELETE
async function deleteUser(id) {
    await User.deleteOne({"_id": id})
}

//helper function
async function getUser(username) {
    return await User.findOne({"username": username})
}

//export function to access in routes
module.exports = { register, login, updatePassword, deleteUser}