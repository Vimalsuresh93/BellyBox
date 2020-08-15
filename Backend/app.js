const express = require("express");
const bodyParser =require("body-parser");
const path = require("path");
const cors = require("cors");
const mongoose =require('mongoose');
const Food = require("./Models/food");
const CharityFood = require("./Models/charityfood");
const userRoutes=require("./user");
const checkAuth= require("./middleware/check-auth")
const app =new express();
app.use(cors());
app.use(bodyParser.json());
app.use("/user",userRoutes);
mongoose.connect("mongodb+srv://vimal:FaULUoSpWbiCHlX7@cluster0-yln7k.mongodb.net/Bellybox")
.then(()=>{
    console.log("Connected to database");
})
.catch(()=>{
    console.log("Connection failed");
});
  app.post("/addfood",checkAuth,(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var food={
     foodname:req.body.newfood.foodname,
      portion:req.body.newfood.portion,
      pickuppoint:req.body.newfood.pickuppoint,
      contactno:req.body.newfood.contactno,
      dealdeadline:req.body.newfood.dealdeadline,
      price:req.body.newfood.price,
      creator:req.userData.userId
    }
    console.log(food);
    var food=new Food(food);
    food.save((error,data)=>{
      if(error){
        res.json({"status":"Error"});
        throw error;
      }
      else{
        res.json({"status":"Success"});
        
      }
    }
     )});
  app.get('/getfood',checkAuth,function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Food.find({ creator: req.userData.userId})
                .then(function(fooddetail){
                    res.send(fooddetail);
                });
});
app.post("/deletefood",checkAuth,(req,res)=>{
  Food.findByIdAndDelete(req.body.deleteId,(error,data)=>{
    if(error){
      res.json({"status":"Error"});
      throw error;
    }
    else{
      res.json({status:"Success"})
    }
  })
})
app.post("/updatefood",checkAuth,(req,res)=>{
  Food.findByIdAndUpdate(req.body._id,{$set:req.body},
    (err,result)=>{
      if(err){
        res.json({status:"Error"});
      }
      else{
        res.json({status:"Success"})
      }
    })
})
app.get('/geteaterfood',checkAuth,function(req,res){
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept,Authorization");
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  Food.find()
              .then(function(fooddetail){
                  res.send(fooddetail);
              });
});

app.post("/addcharityfood",checkAuth,(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  console.log(req.body);
  var food={
   foodname:req.body.newfood.foodname,
    portion:req.body.newfood.portion,
    pickuppoint:req.body.newfood.pickuppoint,
    contactno:req.body.newfood.contactno,
    dealdeadline:req.body.newfood.dealdeadline,
    creator:req.userData.userId
  }
  console.log(food);
  var charityfood=new CharityFood(food);
  charityfood.save((error,data)=>{
    if(error){
      res.json({"status":"Error"});
      throw error;
    }
    else{
      res.json({"status":"Success"});
      
    }
  }
   )});


   app.get('/getcharityfood',checkAuth,function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    CharityFood.find({ creator: req.userData.userId})
                .then(function(fooddetail){
                    res.send(fooddetail);
                });
});
app.post("/deletecharityfood",checkAuth,(req,res)=>{
  CharityFood.findByIdAndDelete(req.body.deleteId,(error,data)=>{
    if(error){
      res.json({"status":"Error"});
      throw error;
    }
    else{
      res.json({status:"Success"})
    }
  })
})
app.post("/updatecharityfood",checkAuth,(req,res)=>{
  CharityFood.findByIdAndUpdate(req.body._id,{$set:req.body},
    (err,result)=>{
      if(err){
        res.json({status:"Error"});
      }
      else{
        res.json({status:"Success"})
      }
    })
})


app.get('/getherofood',checkAuth,function(req,res){
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept,Authorization");
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  CharityFood.find()
              .then(function(fooddetail){
                  res.send(fooddetail);
              });
});

app.get('/getshelterfood',checkAuth,function(req,res){
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept,Authorization");
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  CharityFood.find()
              .then(function(fooddetail){
                  res.send(fooddetail);
              });
});

  module.exports = app;