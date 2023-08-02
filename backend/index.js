const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())
const Router = require("./Router")

app.listen(8000,()=>{
    console.log("server is up and running on port 8000")
})

app.use("/train",Router)