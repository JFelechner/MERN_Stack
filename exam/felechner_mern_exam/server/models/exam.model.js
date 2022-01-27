
const mongoose = require('mongoose');

// update schema name
const ExamSchema = new mongoose.Schema({
    // title: {
    //     type: String,
    //     required: [true, "Title is required!"],
    //     minlength: [2, "Title must be at least 2 characters long"]
    // },
    // price: {
    //     type: Number,
    //     required: [true, "A value is required!"],
    // },
    // description: {
    //     type: String,
    //     required: [true, "A description is required!"],
    //     minlength: [2, "Description must be at least 2 characters long"]
    // }
},
    { timestamps: true }
);

//update below
const ... = mongoose.model('...', ExamSchema);
module.exports = ...;