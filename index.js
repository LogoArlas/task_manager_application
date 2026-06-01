const express = require("express")
const app = express()

const userRoutes = require(".server/routes/user") //access routes in user

//CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.use('/users', userRoutes) //call to use fetch and make http requests

const PORT = process.env.PORT || 3000 //set a communication endpoint
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`)) //start server
