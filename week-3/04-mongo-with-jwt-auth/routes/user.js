const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken")
const {userMiddleware,userSignInMiddleware} = require("../middleware/user");
const {User, Course} =require("../db/index");
const { default: mongoose } = require("mongoose");
require('dotenv').config();
const secret = process.env.JWT_SECRET;
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    try{
        User.create({
            "username": req.body.username,
            "password": req.body.password
        })
        res.json({
            mssg: "User created successfully :)"
        })
    }
    catch(err){
        res.send(err);
    }
});

router.post('/signin',userSignInMiddleware, (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    // const password = req.body.password;
    try{
        const token = jwt.sign({username},secret);
        res.json({
            "token": token
        })
        
    }
    catch(err){
        console.log(err)
        res.send(err);
    }
    
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((course)=>{
        res.json(course);
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    // const course = await Course.findOne({"courseId":courseId})
    const authToken = req.headers.authorization;
    const decoded = jwt.decode(authToken);

    const result = await User.updateOne({"username":decoded.username},
    {$push: {"purchasedCourse": new mongoose.Types.ObjectId(courseId)}});
    if (!result) {
        return res.status(500).json({ message: "Internal server error!" });
    }
    res.json({
        mssg: "$ course purchased $"
    })
});

router.get('/purchasedCourses', userMiddleware,async(req, res) => {
    // Implement fetching purchased courses logic
    const { authorization } = req.headers;
    const decoded = jwt.decode(authorization);
    const username = decoded.username;
    const password = decoded.password;
    const user = User.findOne({"username":username,"password":password});
    if(!user){
        return res.status(404).send("user not found");
    }
    const courses = await Course.find({
        courseId: {
            "$in": user.purchasedCourse
        }
    })
    res.json(courses);

});

module.exports = router