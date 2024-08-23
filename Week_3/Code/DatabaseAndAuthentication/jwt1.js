const jwt = require('jsonwebtoken')
const zod = require("zod")
const jwtPassword = "secret";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username,password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password)
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({
        username,
    },jwtPassword);
    return signature;
}
const ans = signJwt("sam1112@gmail.com","123456");
console.log(ans)
function decodejwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true
    }else return false
}

console.log(decodejwt(ans));

function verifyJwt(token){
    try{
        jwt.verify(token,jwtPassword);
            return true;
    }catch(e){
    }
    return false;
}

console.log(verifyJwt(ans,"password"))