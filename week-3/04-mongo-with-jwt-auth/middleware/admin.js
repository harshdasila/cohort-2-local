// Middleware for handling auth
// const secret = require("../routes/admin")
const {Admin} = require("../db/index")
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

function adminMiddleware(req, res, next) {
    
    const authToken = req.headers['authorization'];
    jwt.verify(authToken,secret,(err,decoded)=>{
        if(err){
            res.status(411).json({
                mssg:"User not authenticated"
            });
            
        }
        else{
            next();
        }
    })
}

async function adminSignInMiddleware(req,res,next) {
    const username = req.body.username;
    const password = req.body.password;
    const user = await Admin.findOne({"username":username,"password":password});
    if(!user){
        res.status(404).send("User not found");
    }
    next();
}

module.exports = {adminMiddleware,adminSignInMiddleware};