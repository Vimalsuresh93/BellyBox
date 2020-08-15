const mongoose = require("mongoose");
const charityfoodSchema =mongoose.Schema({
    
    foodname:String,
    portion:String,
    pickuppoint:String,
    contactno:String,
    dealdeadline:String,
    creator:{type:mongoose.Schema.Types.ObjectId,ref:"CharityUser",required:true}
});
module.exports=mongoose.model("CharityFood",charityfoodSchema);