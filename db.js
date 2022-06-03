const mongoose = require("mongoose");

require('dotenv').config();
console.log(process.env.MONGODB_URI)

const mongoURI = process.env.MONGODB_URI 

mongoose.connect(mongoURI, {useUnifiedTopology : true, useNewUrlParser : true });

const connection = mongoose.connection

connection.on('error', () => {
    console.log("MongoDB connection failed")
})

connection.on('connected', () => {
    console.log("MongoDB connection successful")
})

module.exports = mongoose