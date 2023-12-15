const express = require('express')
const app = express()
const port = 3000
const fs= require("fs")

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(` <form method="post" action="/submit">
  <input type="text" name="formData" placeholder="Enter text">
  <button type="submit">Submit</button>
</form>`)
})

app.post('/submit',(req,res) =>{
    const submittedTodo = req.body.formData;
    fs.appendFile("/Users/harshdasila/Desktop/cohort-2/http-server-1/todo.txt",submittedTodo,function(err){
        if(err){
            console.log(err)
        }
        res.send("todo submitted")
    })
    console.log(submittedTodo);
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
