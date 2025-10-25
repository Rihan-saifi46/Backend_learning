const express = require("express")
const User = require("../models/user-models")
const Bcrypt = require("bcryptjs")

const Home = async (req,res) => {
    try {
        res.status(200).send("Auth controller(HOME PAGE)")
    } catch (error) {
        res.status(400).send("Auth controller(ERROR)")
    }
}

const Register = async (req,res) => {
    try {
        console.log(req.body);
        
        const {home,email,phone,pass} = req.body

        const userExist = await User.findOne({email})

        if(userExist){
            res
            .status(400)
            .json({msg:"email already exist"})
        }

        // pass hash krne ka trika ---> const saltRound = 10;
        // const hash_pass = await Bcrypt.hash(pass,saltRound)

       const userCreated =  await User.create({
        home,
        email,
        phone,
        pass})

        res.status(200).json({msg:userCreated})
    } catch (error) {
        res.status(400).send("INTERNAL ERROR PAGE")
    }
}

module.exports = {Home,Register}