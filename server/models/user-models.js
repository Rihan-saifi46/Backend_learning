const mongoose = require("mongoose")

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
userSchema.pre('save',function(){
  console.log("pre method",this); 
})

const User1 = new mongoose.model("User1",userSchema);
module.exports = User1;

