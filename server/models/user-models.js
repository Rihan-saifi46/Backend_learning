const mongoose = require("mongoose")
const Bcrypt = require("bcryptjs")

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

const User1 = new mongoose.model("User1",userSchema);
module.exports = User1;

