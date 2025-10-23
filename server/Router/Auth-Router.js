const express = require('express')

const Router = express.Router() 
const {Home,Register} = require("../Controller/auth-controller")

Router.route("/").get(Home)

Router.route("/about").get(Register)

module.exports = Router;