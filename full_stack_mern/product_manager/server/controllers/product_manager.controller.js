
const Product = require('../models/product_manager.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json({ results: allProducts })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(singleProduct => {
            res.json({ results: singleProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findRandomProduct = (req, res) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    Product.find()
        .then(allProducts => {
            let randomIndex = getRandomInt(allProducts.length)
            res.json({ results: allProducts[randomIndex] })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createNewProduct = (req, res) => {
    console.log("REQ.BODY--->", req.body)
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ results: newlyCreatedProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ results: updatedProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => {
            res.json({ results: deletedProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}