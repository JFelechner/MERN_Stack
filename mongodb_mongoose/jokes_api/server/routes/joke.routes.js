
//import the controller file and give it a variable name to reference
const JokeController = require("../controllers/joke.controller")
const Joke = require("../models/joke.model")

module.exports = (app)=>{
    app.get("/api/jokes", JokeController.findAllJokes)
    app.get("/api/jokes/:id", JokeController.findOneJoke)
    app.post("/api/jokes", JokeController.createNewJoke)
    app.put("/api/jokes/:id", JokeController.updateJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
}