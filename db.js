const mongoose = require("mongoose");

const mongoURL = `mongodb+srv://alanlinsanity:32s9221683g@cluster0.vq2et.mongodb.net/free2list`

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser : true });

const connection = mongoose.connection

connection.on('error', () => {
    console.log("MongoDB connection failed")
})

connection.on('connected', () => {
    console.log("MongoDB connection successful")
})

module.exports = mongoose