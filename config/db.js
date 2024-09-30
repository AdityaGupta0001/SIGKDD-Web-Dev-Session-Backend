const mongoose = require('mongoose');

require('dotenv').config();

const db = mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to database!');
}).catch((error)=>{
    console.log('Connection failed: ',error);
})

module.exports = db;
