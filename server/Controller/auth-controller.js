const express = require("express")

const Home = async (req,res) => {
    try {
        res.status(200).send("Auth controller(HOME PAGE)")
    } catch (error) {
        res.status(400).send("Auth controller(ERROR)")
    }
}

const Register = async (req,res) => {
    try {
        res.status(200).send("Auth controller(REGISTER PAGE)")
    } catch (error) {
        res.status(400).send("Auth controller(REGISTER ERROR PAGE)")
    }
}

module.exports = {Home,Register}