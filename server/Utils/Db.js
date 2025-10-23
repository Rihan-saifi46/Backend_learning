const mongoose = require("mongoose")

const URI = "mongodb://127.0.0.1:27017/practice";

// mongoose.connect(URI)

const connect = async () => {
  try {
   await mongoose.connect(URI)
   console.log("connection success");
  } catch (error) {
    console.error("connection failed");
    process.exit(0)   
  }
}

module.exports = connect;