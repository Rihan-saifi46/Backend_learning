// require("dotenv").config({override:true});
const express = require("express");
const app = express();
const Router = require("./server/Router/Auth-Router");
const connect = require("./server/Utils/Db");

app.use(express.json())

app.use("/api/auth",Router)

// app.get("/",(req,res) => {
//     res.status(200).send("starting app")
// })

// app.get("/about",(req,res) => {
//     res.status(200).send("starting about page in app")
// })

const PORT = 4500;


connect().then(()=>{
app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})
})
