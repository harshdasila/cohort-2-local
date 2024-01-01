require('dotenv').config();
const express = require("express");
const app = express();
const { todoSchema } = require("./db");
const { inputType,markAsDoneType } = require("./types") ;
const cors = require('cors');
app.use(express.json());
app.use(cors());


app.post("/todo",async (req,res)=>{
    const inputPayload= req.body;
    const parsed = inputType.safeParse(inputPayload)
    if(!parsed.success){
        
        res.status(411).json({
            mssg: "wrong format"
        })
        return;
    }
    await todoSchema.create({
        
        title: inputPayload.title,
        description: inputPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
    
})
app.get("/todos",async(req,res)=>{
    const allTodos = await todoSchema.find({})
    res.json({allTodos})
})

app.put("/completed",async (req,res)=>{
    const id = req.body;
    const parsedID = markAsDoneType.safeParse(id);
    if(!parsedID.success){
        res.status(411).json({
            mssg: "wrong format of id"
        })
        return;
    }
    await todoSchema.updateOne({
        _id : req.body.id,
    },{
        $set:
        {completed: true}
    })
    console.log(id)
    res.json({
        mssg: "Marked as done"
    })
    return;
})


app.listen(3000);