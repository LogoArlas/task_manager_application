//fake database for testing connection

const users = [
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

module.exports = { getUsers }