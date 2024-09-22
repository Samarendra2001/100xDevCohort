const zod = require("zod");
const express = require("express")
const app = express();

function ValidateINput(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(6),
    })
    const response = schema.safeparse(obj);
    console.log(response);
}


app.post("/login",((req,res)=>{
    const response = ValidateINput(req.body);
    if(!response.success){
        res.json({
            msg:"Your input is Invalid"
        })
        return;
    }
}))

// //In Zod, safeParse is used to validate data while providing a detailed response on 
//whether the validation was successful or not, without throwing an error. 
//It returns an object containing two properties: success and data/error.

// Here's a breakdown:

// success: A boolean indicating whether the validation passed (true) or failed (false).
// data: Contains the validated data if success is true.
// error: Contains the validation errors if success is false.

app.listen(3000);