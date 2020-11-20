const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const mongoose =require("mongoose")
const port =process.env.PORT || 5400

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
//Replace URI here
const uri = "mongodb+srv://trung:<tttttt>@cluster0-spnw4.mongodb.net/<app>?retryWrites=true&w=majority"

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection =mongoose.connection
connection.once('open', ()=>{
    console.log("MongoDB connection established successfully!")
})

const Users =require('./routes/Users')

app.use('/users',Users)
app.listen(port,()=>{
    console.log("Server is running on port: "+port)
})