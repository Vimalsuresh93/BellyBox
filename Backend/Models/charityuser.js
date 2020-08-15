const mongoose = require("mongoose");
const uniqueValidator=require("mongoose-unique-validator");
const charityuserSchema =mongoose.Schema({
    
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});
charityuserSchema.plugin(uniqueValidator);
module.exports=mongoose.model("CharityUser",charityuserSchema);