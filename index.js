const express = require("express")
const app = express()
const path = require("path")

app.use(express.json())

const userRoutes = require("./server/routes/user") //access routes in user
const eventRoutes = require("./server/routes/event")
const taskRoutes = require("./server/routes/task")

//CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.use(express.static(__dirname + "/public"))
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public", "index.html")))

app.use("/user", userRoutes) //call to use fetch and make http requests
app.use("/event", eventRoutes)
app.use("/task", taskRoutes)

const PORT = process.env.PORT || 3000 //set a communication endpoint
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`)) //start server
