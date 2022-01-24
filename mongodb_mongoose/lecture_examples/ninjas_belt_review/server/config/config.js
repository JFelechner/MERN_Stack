
//only purpose of this file is to establish connection to database

const mongoose = require('mongoose'); //import mongoose
const db_name = "ninjas_db"

//connecting to our mongodb database using mongoose
mongoose.connect(`mongodb+srv://root:root@cluster0.nsamo.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

