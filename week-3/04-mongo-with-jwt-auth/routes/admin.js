const { Router } = require("express");
const {adminMiddleware,adminSignInMiddleware} = require("../middleware/admin");
const {Admin,Course} = require("../db/index")
const jwt = require("jsonwebtoken")
const router = Router();
require('dotenv').config();

const secret = process.env.JWT_SECRET;
// Admin Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    Admin.create({
        "username": username,
        "password": password
    })
    res.send({
        mssg: "admin created successfully"
    })
});

router.post('/signin', adminSignInMiddleware, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const token = jwt.sign({username},secret);
    res.send({
        "token": token
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    
    let id = Math.floor(Math.random() * 1001);
    Course.create({
        "id": id,
        "title": req.body.title,
        "description": req.body.description,
        "price": req.body.price,
        "imageLink": req.body.imageLink
    });
    res.send({
        mssg:"Couse Added :) "
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then((course)=>{
        res.json(course);
    })
});

module.exports = router;