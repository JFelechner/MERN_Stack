
const express = require("express"); //require is a way of importing something in a js file
const app = express(); //create a variable called app--> this variable is an instance of express
const port = 8000;

//need these two lines below to be able to read and extract the information received from post requests
app.use(express.json())
app.use(express.urlencoded({extended:true})) //be able to read form information


// this info would be in data base
let quotes = [
    {content: "It is not the mountains ahead that will wear you out, it is the pebble in your shoe", author:"Muhammad Ali"},
    {content:"A wise man once said nothing at all", author:"Wes"},
    {content:"Comparison is a theif of joy", author:"Theodore Roosevelt"},
    {content:"Fall down 7 times stand up 8", author:"Japanese Proverb"},
    {content:"You Attract what you vibrate", author:"Fritz"},
    {content:"Wherever you go, there you are", author:"Eckhart Tolle"}
]


//this is an api endpoint
app.get("/api/hello",(req,res)=>{
    res.json({msg:"hello express!!!"})
} )

//get all quotes
app.get("/api/quotes", (req, res)=>{
    res.json({count: quotes.length, results: quotes}) // count: used to show count of all quotes 
})

//get one quote by "id"
app.get("/api/quotes/:idx", (req,res)=>{
    res.json({results: quotes[req.params.idx]})
})

//add a new quote. Postman used to post new quote.
app.post("/api/quotes", (req, res)=>{
    console.log("req.body", req.body)
    quotes.push(req.body) // push the form information into the quotes array
    res.json({msg: "success", results: quotes})
})

//update a quote
app.put("/api/quotes/:idx", (req,res)=>{
    //two parts to a put request ---> which thing we want to update and what data we want to use to update it with (req.body)
    quotes[req.params.idx] = req.body //update quotes array at specified index (coming from the route) with the form information
    res.json({count: quotes.length, results: quotes})
})

app.delete("/api/quotes/:idx", (req,res)=>{
    // you can use splice to remove something from an array
    quotes.splice(req.params.idx, 1)
    res.json({count: quotes.length, results: quotes})
})



//this line is usually at the bottom
app.listen( 8000, () => console.log(`Listening on port: ${port}`) );