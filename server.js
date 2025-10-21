const express = require("express")

const app = express()
const Router = require("./Auth-Router/Router");

app.use("/api/auth",Router)

// app.get("/",(req,res) => {
//     res.status(200).send("starting app")
// })

// app.get("/about",(req,res) => {
//     res.status(200).send("starting about page in app")
// })

const PORT = 4500;

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})