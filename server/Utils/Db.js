// require('dotenv').config();
const mongoose = require("mongoose")

// const URI = "mongodb://127.0.0.1:27017/practice";
const URI = process.env.MONGODB_URI;
// console.log("Loaded MongoDB URI:", process.env.MONGODB_URI)

const connect = async () => {
  try {
   await mongoose.connect(URI)
  //  console.log("Loaded MongoDB URI:", process.env.MONGODB_URI);
   console.log("connection success");
  } catch (error) {
    console.error("connection failed",error.message); 
    process.exit(1)   
  }
}

module.exports = connect;
