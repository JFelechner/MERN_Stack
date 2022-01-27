

const ... = require("../models/exam.model");

module.exports.findAll... = (req, res) => {
    ....find()
        .then(all... => {
            res.json({ results: all... })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOne... = (req, res) => {
    ....findOne({ _id: req.params.id })
        .then(single... => {
            res.json({ results: single... })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createNew... = (req, res) => {
    console.log("REQ.BODY--->", req.body)
    ....create(req.body)
        .then(newlyCreated... => {
            res.json({ results: newlyCreated... })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.update...= (req, res) => {
    ....findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        { new: true, runValidators: true }
    )
        .then(updated... => {
            res.json({ results: updated... })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.delete... = (req, res) => {
    ....deleteOne({ _id: req.params.id })
        .then(deleted... => {
            res.json({ results: deleted... })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}