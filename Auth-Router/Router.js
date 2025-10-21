const express = require('express')

const Router = express.Router() 

Router.get("/",(req,res) => {
    res.status(200).send("Auth Router(HOME PAGE)")
})

Router.route("/about").get((req,res) => {
    res.status(200).send("Auth Router(ABOUT PAGE)")
})

module.exports = Router;