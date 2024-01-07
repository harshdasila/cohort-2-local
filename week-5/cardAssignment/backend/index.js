const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
const {CardData} = require('./db')
app.use(cors())
app.post('/card',async(req,res)=>{
    const fName = req.body.fName;
    const description = req.body.description;
    const interests = req.body.interests;
    try{
        await CardData.create({
            fName,
            description,
            interests
        })
        
    }
    catch(err){
        res.send("error in post req")
    }
    res.json({
        mssg: "card created"
    })
    
})

app.get('/getCard',async(req,res)=>{
   
    const data = await CardData.find({});
    res.json({data});
})

app.listen(3000);