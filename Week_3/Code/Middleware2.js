const express = require("express")
const app = express();


function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "Sam" || password != "pass"){
        res.status(400).json({
            msg:"Check with your Credentials"
        })
    }else{
        next();
    }
    
}

function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({
            msg:"Incorrect Input"
        })
    }else next();
}

app.get("/health-checkup",userMiddleware,kidneyMiddleware,((req,res)=>{
    res.send("your heart is healthy")
}))

app.get("/kidney-check",userMiddleware,kidneyMiddleware,((req,res)=>{
    res.send("your kidney is healthy")
}))
app.listen(3000);