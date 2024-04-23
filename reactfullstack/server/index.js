const express = require("express");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT
const cors = require("cors")
app.use(cors())
const userRouter = require("./routes/user.route")
app.use("/users", userRouter);


app.listen(PORT,() => {
// let PORTS = 7000
    console.log("backend has joined at port" + PORT);
     console.log(PORT);
})