

const PetShelterController = require("../controllers/pet_shelter.controller")
const Pet = require("../models/pet_shelter.model")


module.exports = (app)=>{
    app.get("/api/pets", PetShelterController.findAllPets)
    app.get("/api/pets/:id", PetShelterController.findOnePet)
    app.post("/api/pets", PetShelterController.createNewPet)
    app.put("/api/:id/pets", PetShelterController.updatePet)
    app.delete("/api/pets/:id", PetShelterController.deletedPet)    
}