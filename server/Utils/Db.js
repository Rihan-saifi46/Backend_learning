const mongoose = require("mongoose")

// const URI = "mongodb://127.0.0.1:27017/practice";
const URI = "mongodb+srv://rihan123:shuru@cluster0.zbhf5kd.mongodb.net/practice?appName=Cluster0";

// mongoose.connect(URI)

const connect = async () => {
  try {
   await mongoose.connect(URI)
   console.log("connection success");
  } catch (error) {
    console.error("connection failed",error.message); 
    process.exit(1)   
  }
}

module.exports = connect;