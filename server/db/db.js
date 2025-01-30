const mongoose = require("mongoose");

const connectToMongoDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/new_note");
        console.log("Connected to MongoDB")
    } catch(err) {
        console.log("Error connecting to MongoDB", err.message)
    }
}

module.exports = connectToMongoDB;
