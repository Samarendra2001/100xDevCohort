const zod = require("zod");
const express = require("express")
const app = express();

function ValidateINput(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(6),
    })
}
const response = schema.safeparse(obj);
console.log(response);

app.post("/login",((req,res)=>{
    const response = ValidateINput(req.body);
    if(!response.success){
        res.json({
            msg:"Your input is Invalid"
        })
        return;
    }
}))

app.listen(3000);