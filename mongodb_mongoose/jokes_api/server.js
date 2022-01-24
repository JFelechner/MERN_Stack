
const express = require("express") //import express
const app = express(); //initialize express
const port = 8001; //specify port in variable 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require("./server/config/config")
require('./server/routes/joke.routes')(app)

app.listen( port, () => console.log(`Listening on port: ${port}`) );