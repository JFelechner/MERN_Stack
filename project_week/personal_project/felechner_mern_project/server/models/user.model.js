
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'User name is required. Can be the same as GamerTag']
    },
    apiKey: {
        type: String,
        required: [true, 'API Key is required']
    },
    
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be 8 characters or longer'],
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);