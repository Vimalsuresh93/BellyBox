const mongoose = require("mongoose");
const uniqueValidator=require("mongoose-unique-validator");
const herouserSchema =mongoose.Schema({
    
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});
herouserSchema.plugin(uniqueValidator);
module.exports=mongoose.model("HeroUser",herouserSchema);