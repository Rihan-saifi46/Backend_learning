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
        res.status(200).json({msg:req.body})
    } catch (error) {
        res.status(400).send("INTERNAL ERROR PAGE")
    }
}

module.exports = {Home,Register}