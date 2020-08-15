const express = require("express");
const bcrypt =require ("bcrypt");
const jwt = require("jsonwebtoken");
const User=require("./Models/user");
const EaterUser=require("./Models/eateruserr");
const CharityUser=require("./Models/charityuser");
const HeroUser=require("./Models/herouser");
const ShelterUser=require("./Models/shelteruser");
const router = express.Router();
router.post("/signup",(req,res,next)=>{
    bcrypt.hash(req.body.password,10).then(hash=>{
        const user= new User({
            email:req.body.email,
            password:hash
        });
        user.save()
        .then(result=>{
            res.status(201).json({
                message:'User created',
                result:result
            });
        })
    .catch(err=>{
        res.status(500).json({
          error:err  
        });
    })
    })
    
});
router.post("/login",(req,res,next)=>{
    let fetchedUser;
    User.findOne({email:req.body.email}).then(user=>{
        if(!user){
            return res.status(401).json({
                message:"Auth failed"
            });
        }
        fetchedUser=user;
        return bcrypt.compare(req.body.password,user.password);
    })
    .then(result=>{
if(!result){
    return res.status(401).json({
        message:"Auth failed"
    });
}
const token=jwt.sign({email:fetchedUser.email,userId:fetchedUser._id},"vimal_secret_code",{expiresIn:"1h"});
res.status(200).json({
    token:token
});
    })
    .catch(err=>{
        return res.status(401).json({
            message:"Auth failed"
        });
    });
});


router.post("/eatersignup",(req,res,next)=>{
    bcrypt.hash(req.body.password,10).then(hash=>{
        const eateruser= new EaterUser({
            email:req.body.email,
            password:hash
        });
        eateruser.save()
        .then(result=>{
            res.status(201).json({
                message:'User created',
                result:result
            });
        })
    .catch(err=>{
        res.status(500).json({
          error:err  
        });
    })
    })
    
});




router.post("/eaterlogin",(req,res,next)=>{
    let fetchedUser;
    EaterUser.findOne({email:req.body.email}).then(eateruser=>{
        if(!eateruser){
            return res.status(401).json({
                message:"Auth failed"
            });
        }
        fetchedUser=eateruser;
        return bcrypt.compare(req.body.password,eateruser.password);
    })
    .then(result=>{
if(!result){
    return res.status(401).json({
        message:"Auth failed"
    });
}
const token=jwt.sign({email:fetchedUser.email,userId:fetchedUser._id},"vimal_secret_code",{expiresIn:"1h"});
res.status(200).json({
    token:token
});
    })
    .catch(err=>{
        return res.status(401).json({
            message:"Auth failed"
        });
    });
});


router.post("/charityusersignup",(req,res,next)=>{
    bcrypt.hash(req.body.password,10).then(hash=>{
        const charityuser= new CharityUser({
            email:req.body.email,
            password:hash
        });
        charityuser.save()
        .then(result=>{
            res.status(201).json({
                message:'User created',
                result:result
            });
        })
    .catch(err=>{
        res.status(500).json({
          error:err  
        });
    })
    })
    
});


router.post("/charityuserlogin",(req,res,next)=>{
    let fetchedUser;
    CharityUser.findOne({email:req.body.email}).then(charityuser=>{
        if(!charityuser){
            return res.status(401).json({
                message:"Auth failed"
            });
        }
        fetchedUser=charityuser;
        return bcrypt.compare(req.body.password,charityuser.password);
    })
    .then(result=>{
if(!result){
    return res.status(401).json({
        message:"Auth failed"
    });
}
const token=jwt.sign({email:fetchedUser.email,userId:fetchedUser._id},"vimal_secret_code",{expiresIn:"1h"});
res.status(200).json({
    token:token
});
    })
    .catch(err=>{
        return res.status(401).json({
            message:"Auth failed"
        });
    });
});

router.post("/herosignup",(req,res,next)=>{
    bcrypt.hash(req.body.password,10).then(hash=>{
        const herouser= new HeroUser({
            email:req.body.email,
            password:hash
        });
        herouser.save()
        .then(result=>{
            res.status(201).json({
                message:'User created',
                result:result
            });
        })
    .catch(err=>{
        res.status(500).json({
          error:err  
        });
    })
    })
    
});


router.post("/herologin",(req,res,next)=>{
    let fetchedUser;
    HeroUser.findOne({email:req.body.email}).then(herouser=>{
        if(!herouser){
            return res.status(401).json({
                message:"Auth failed"
            });
        }
        fetchedUser=herouser;
        return bcrypt.compare(req.body.password,herouser.password);
    })
    .then(result=>{
if(!result){
    return res.status(401).json({
        message:"Auth failed"
    });
}
const token=jwt.sign({email:fetchedUser.email,userId:fetchedUser._id},"vimal_secret_code",{expiresIn:"1h"});
res.status(200).json({
    token:token
});
    })
    .catch(err=>{
        return res.status(401).json({
            message:"Auth failed"
        });
    });
});


router.post("/sheltersignup",(req,res,next)=>{
    bcrypt.hash(req.body.password,10).then(hash=>{
        const shelteruser= new ShelterUser({
            email:req.body.email,
            password:hash
        });
        shelteruser.save()
        .then(result=>{
            res.status(201).json({
                message:'User created',
                result:result
            });
        })
    .catch(err=>{
        res.status(500).json({
          error:err  
        });
    })
    })
    
});

router.post("/shelterlogin",(req,res,next)=>{
    let fetchedUser;
    ShelterUser.findOne({email:req.body.email}).then(shelteruser=>{
        if(!shelteruser){
            return res.status(401).json({
                message:"Auth failed"
            });
        }
        fetchedUser=shelteruser;
        return bcrypt.compare(req.body.password,shelteruser.password);
    })
    .then(result=>{
if(!result){
    return res.status(401).json({
        message:"Auth failed"
    });
}
const token=jwt.sign({email:fetchedUser.email,userId:fetchedUser._id},"vimal_secret_code",{expiresIn:"1h"});
res.status(200).json({
    token:token
});
    })
    .catch(err=>{
        return res.status(401).json({
            message:"Auth failed"
        });
    });
});

module.exports=router;