const mongoose = require("mongoose");
const foodSchema =mongoose.Schema({
    
    foodname:String,
    portion:String,
    pickuppoint:String,
    contactno:String,
    dealdeadline:String,
    price:String,
    creator:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}
});
module.exports=mongoose.model("Food",foodSchema);