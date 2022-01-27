

const AuthorController = require("../controllers/author.controller")
const Author = require("../models/author.model")


module.exports = (app)=>{
    app.get("/api/authors", AuthorController.findAllAuthors)
    app.get("/api/author/:id", AuthorController.findOneAuthor)
    app.post("/api/author", AuthorController.createNewAuthor)
    app.put("/api/author/:id", AuthorController.updateAuthor)
    app.delete("/api/author/:id", AuthorController.deleteAuthor)    
}