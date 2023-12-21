const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require("zod");

const usernameSchema = zod.string().email();
const passSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameCheck = usernameSchema.safeParse(username);
    const passCheck = passSchema.safeParse(password);
    if(usernameCheck.error || passCheck.error){
        return null;
    }
    const token = jwt.sign({"username": username},jwtPassword);
    return token;
}



function verifyJwt(token) {
    let flag;
    if(!token){
        flag = false;
    }
    jwt.verify(token,jwtPassword,(err,decoded) =>{
        if(err){
            flag = false;
        }
        else flag = true;
    })
   return flag;
}
        
function decodeJwt(token) {
   const tokenPayload = jwt.decode(token,jwtPassword);
   if(tokenPayload){
    return true;
   }
   else return false;
    
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}