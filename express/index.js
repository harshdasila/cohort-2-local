const express = require("express");
const app = express();


function calSum(n){
    let sum=0;
    for(var i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

app.get("/",(req,res)=>{
    // res.send("HEllo ethete")
    var n = req.query.n;
    var ans = calSum(n);
    res.send("Hello the sum is - "+(ans));
})


app.listen(3001);