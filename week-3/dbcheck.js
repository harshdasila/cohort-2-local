const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://harshdasila5555:Harsh%406112@cluster0.muz5vq8.mongodb.net/userappnew",
);

const user = mongoose.model("user", {
  name: String,
  username: String,
  pasword: String,
});

app.post("/putuser", async(req, res) => {
  const newname = req.body.name;
  const newusername = req.body.username;
  const newpassword = req.body.password;

const findUser =await user.findOne({ username: newusername });
if(findUser){
    res.status(400).send({
        msg: "user already exists"
    })
    return ;
}

  const data = new user({
    name: newname,
    username: newusername,
    password: newpassword,
  });

  data.save()
  .then(() => {
    res.status(200).send("done dana dan done")
  })
  .catch(error => {
    console.error(error);
    res.status(500).send("Internal Server Error");
  });

});

app.listen(3000);
