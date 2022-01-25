
const ProductManagerController = require("../controllers/product_manager.controller")
const Product = require("../models/product_manager.model")


module.exports = (app)=>{
    app.get("/api/products", ProductManagerController.findAllProducts)
    app.get("/api/products/:id", ProductManagerController.findOneProduct)
    app.get("/api/products/random", ProductManagerController.findRandomProduct)
    app.post("/api/products", ProductManagerController.createNewProduct)
    app.put("/api/products/:id", ProductManagerController.updateProduct)
    app.delete("/api/products/:id", ProductManagerController.deleteProduct)    
}