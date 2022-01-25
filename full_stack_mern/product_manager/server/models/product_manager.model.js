
const mongoose = require('mongoose');

const ProductManagerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [2, "Title must be at least 2 characters long"]
    },
    price: {
        type: Number,
        required: [true, "A value is required!"],
    },
    description: {
        type: String,
        required: [true, "A description is required!"],
        minlength: [2, "Description must be at least 2 characters long"]
    }
},
    { timestamps: true }
);

const Product = mongoose.model('Product', ProductManagerSchema);
module.exports = Product;