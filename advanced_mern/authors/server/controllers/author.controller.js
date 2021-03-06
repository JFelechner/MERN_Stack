

const Author = require("../models/author.model");

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => {
            res.json({ results: allAuthors })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(singleAuthor => {
            res.json({ results: singleAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createNewAuthor = (req, res) => {
    console.log("REQ.BODY--->", req.body)
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            res.json({ results: newlyCreatedAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.updateAuthor= (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json({ results: updatedAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deletedAuthor => {
            res.json({ results: deletedAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}