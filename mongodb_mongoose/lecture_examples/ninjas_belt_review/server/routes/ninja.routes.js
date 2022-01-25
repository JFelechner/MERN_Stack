
//import the controller file and give it a variable name to reference
const NinjaController = require("../controllers/ninja.controller")
const Ninja = require("../models/ninja.model")


// these are the back end rourtes - AKA api endpoints
module.exports = (app)=>{
    //to get all
    app.get("/api/ninjas", NinjaController.findAllNinjas)

    //to get one
    app.get("/api/ninjas/:id", NinjaController.findOneNinja)

    //to get random one
    app.get("/api/ninjas/random", NinjaController.findRandomNinja)

    //to create one
    app.post("/api/ninjas", NinjaController.createNewNinja)

    //to update one
    app.put("/api/ninjas/:id", NinjaController.updateNinja)

    //to delete one
    app.delete("/api/ninjas/:id", NinjaController.deleteNinja)    
}