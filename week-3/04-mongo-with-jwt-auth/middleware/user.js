const { User } = require("../db");
require('dotenv').config();
const secret = process.env.JWT_SECRET;

const jwt = require('jsonwebtoken');



function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const authToken = req.headers.authorization;
    jwt.verify(authToken,secret,(err,decoded)=>{
        if(err){
            res.status(411).json({
                mssg:"User not authenticated"
            })
            return;
        }
        else{
            next();
        }
    })
}
async function userSignInMiddleware(req,res,next) {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({"username":username,"password":password});
    if(!user){
        res.status(404).send("User not found");
        return;
    }
    next();
}

module.exports = {userMiddleware,userSignInMiddleware};