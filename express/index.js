const { log } = require("console");
const express = require("express");
const app = express();

var data = [{
    name:"Harsh",
    kidneys:[{
        healthy: true,
    },{
        healthy: false
    }]
}]

app.use(express.json());

app.get("/",(req,res)=>{
    let healthyKidneys=0,unHealthyKidneys=0;
    const totalKidneys = data[0].kidneys.length;
    for(var i=0; i<totalKidneys;i++){
        if(data[0].kidneys[i].healthy==true){
            healthyKidneys=healthyKidneys+1;
        }
        
    }
    unHealthyKidneys = totalKidneys-healthyKidneys;
    res.json({totalKidneys,healthyKidneys,unHealthyKidneys});
})
app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    data[0].kidneys.push({healthy:isHealthy});
    res.send("Done!")
})

app.put("/",(req,res)=>{
    var numOfHealthyKidneys=0;
    for(var i=0;i<data[0].kidneys.length;i++){
        if(data[0].kidneys[i].healthy==true){
            numOfHealthyKidneys=numOfHealthyKidneys+1;
        }
    }
    console.log(numOfHealthyKidneys,data[0].kidneys.length);
    if(numOfHealthyKidneys==data[0].kidneys.length){
        res.status(411).send({msg:"Already all healthy"});
    }
    for(var i=0;i<data[0].kidneys.length;i++){
        data[0].kidneys[i].healthy = true;
    }
    res.send("Made all healthy")
})

app.delete("/",(req,res)=>{
    var numOfDefectedKidneys=0;
    
    for(var i=0;i<data[0].kidneys.length;i++){
        if(data[0].kidneys[i].healthy==false){
            numOfDefectedKidneys+=1;
        }
    }
    console.log(numOfDefectedKidneys);
    if(numOfDefectedKidneys==0){
        
        res.status(411).send({msg: "no more to delete "});
    }
    let newarr=[];
    for(var i=0;i<data[0].kidneys.length;i++){
        if(data[0].kidneys[i].healthy){
            newarr.push({healthy:true});
        }
    }
    data[0].kidneys = newarr;
    res.json({msg: "deleted"})
})


app.listen(3000);