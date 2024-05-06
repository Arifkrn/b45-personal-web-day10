const express = require("express")
const app = express()
const port = 3000

// route
app.get("/", (req, res) => {
    res.send("get")
})


app.listen(port, () => {
    console.log("server is running:", port)
})