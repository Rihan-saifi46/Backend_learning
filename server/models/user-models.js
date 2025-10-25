const mongoose = require("mongoose")
const Bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    pass:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
})
// pass hass krne ka dusra trika 
userSchema.pre('save',async function(next){
//   console.log("pre method",this);
   const user = this;
  
  if(!user.isModified("pass")){
    next();
  }
  try {
    const saltRound = await Bcrypt.genSalt(10);
    const hash_pass = await Bcrypt.hash(user.pass,saltRound)
    user.pass = hash_pass
  } catch (error) {
     next
     (error);
  }
})

// json web token 
// isko kbhi apne db mei store nhi krna h hmesha browser mei krna h in the form of cookies 
// or local storage 

// userSchema.methods.generateToken =async function(){
//   try {
//    return jwt.sign({
//     userId:this._id.toString(),
//     email:this.email,
//     isAdmin:this.isAdmin
//    })
//   } catch (error) {
    
//   }
// }


const User1 = new mongoose.model("User1",userSchema);
module.exports = User1;

