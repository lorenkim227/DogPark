require('dotenv').config(); 
const mongoose = require('mongoose');

exports.connect = async function() {
    let uri = process.env.DB_URI;
    try {
        await mongoose.connect(uri);
    } catch (err) {
        console.error(err);
    }
}

exports.disconnect = async function() {
    await mongoose.connection.close();
}