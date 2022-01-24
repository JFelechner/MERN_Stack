
const express = require("express") //import express
const app = express(); //initialize express
const port = 8000; //specify port in variable 

//need these two lines below to be able to read and extract the information received from post requests
app.use(express.json())
app.use(express.urlencoded({extended:true})) //be able to read form information


//connecting to our mongodb database using mongoose
require("./server/config/config")

//request go to below route
//import the routes and pass the app object to the routes
require('./server/routes/ninja.routes')(app)


app.listen( port, () => console.log(`Listening on port: ${port}`) );