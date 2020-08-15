const mongoose = require("mongoose");
const uniqueValidator=require("mongoose-unique-validator");
const shelteruserSchema =mongoose.Schema({
    
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});
shelteruserSchema.plugin(uniqueValidator);
module.exports=mongoose.model("ShelterUser",shelteruserSchema);