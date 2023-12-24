const express = require('express');
const app = express();
app.use(express.json());

app.get("/interest",(req,res)=>{
    const principle = parseFloat(req.query.principle);
    const rate = parseFloat(req.query.rate);
    const time = parseFloat(req.query.time);
    const si = (principle*rate*time)/100;
    const total = parseInt(principle+si);
    // console.log(principle)
    res.json({
        "total": total,
        "interest": si
    })
})

app.listen(3001);