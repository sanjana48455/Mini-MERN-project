const mongoose = require("mongoose");

let cachedConnection = null;

async function connectDB() {
    if (cachedConnection) {
        return cachedConnection;
    }

    cachedConnection = await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to DB");

    return cachedConnection;
}

module.exports = connectDB;