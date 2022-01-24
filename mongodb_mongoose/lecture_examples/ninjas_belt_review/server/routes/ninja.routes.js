
//import the controller file and give it a variable name to reference
const NinjaController = require("../controllers/ninja.controller")
const Ninja = require("../models/ninja.model")

module.exports = (app)=>{
    //more routes here
    app.get("/api/hello", NinjaController.sayHello)
    app.get("/api/ninjas", NinjaController.findAllNinjas)
    app.get("/api/ninjas/:id", NinjaController.findOneNinja)
    app.post("/api/ninjas", NinjaController.createNewNinja)
    app.put("/api/ninjas/:id", NinjaController.updateNinja)
    app.delete("/api/ninjas/:id", NinjaController.deleteNinja)    
}