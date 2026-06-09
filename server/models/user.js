const mongoose = require("mongoose")

//schema
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: String
})

//model of schema
const User = mongoose.model("User", userSchema)

//CRUD functions on model
//CREATE a user
async function register(username, password, email) {
    const user = getUser(username)
    if(user) throw Error('Username already in use')
    
    const newUser = await User.create({
        username: username,
        password: password
    })
}
//READ a user
async function login(username, password) {
    const user = getUser(username)
    if(!user) throw Error('User not found')
    if(user.password != password) throw Errow('Wrong Password')

    return user
}

//UPDATE
/*async function updatePassword(id, password) {
    const user = await User.findByIdAndUpdate()
}*/

async function updatePassword(id, password) {
    const user = await User.updateOne({"_id": id}, {$set: {}})
    return user
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

//fake database for testing connection

/*const users = [
    {
        username: "hello1",
        password: "password"
    },
    {
        username: "hello2",
        password: "password",
        email: "hello2@example.com"
    },
    {
        username: "hello3",
        password: "password"
    }
]

function getUsers() {
    return users;
}

module.exports = { getUsers }*/