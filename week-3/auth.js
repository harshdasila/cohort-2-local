const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());


const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

//check if the user exits 
function userExists(username, password) {
 const flag = ALL_USERS.findIndex((body)=>body.username==username && body.password==password)
 if(flag==-1) return false;
 return true;
}

app.post("/signin", function (req, res) {
  
  const username = req.body.username;
  const password = req.body.password;
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

//filter out data 
function getUsersData(user){
  const newArray = ALL_USERS.filter(function(obj){
    if(obj.username==user){
      return false;
    }
    return true;
  })
  return newArray;
}


//return all the data of users other than the one that is passed
app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const data = getUsersData(username);
    res.json(data);
  } catch (err) {
    console.log(err)
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)