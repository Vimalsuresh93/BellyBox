const mongoose = require("mongoose");
const uniqueValidator=require("mongoose-unique-validator");
const eateruserSchema =mongoose.Schema({
    
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});
eateruserSchema.plugin(uniqueValidator);
module.exports=mongoose.model("EaterUser",eateruserSchema);