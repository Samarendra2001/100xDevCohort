const express = require("express");
const mongoose = require("mongoose")
const app =express();
app.use(express.json());


mongoose.connect("mongodb+srv://samrendrak882:Barick2001@cluster0.jrsqp.mongodb.net/")
const User = mongoose.model('Users',{
    name:String,
    email:String,
    password:String
});
app.post("/signup",async function(req,res){
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;

    const existingUser = await User.findOne({email:username});
    if(existingUser){
        return res.status(400).send("username is already exists")
    }
    const user = new User({
        name:"Sama",
        email:"sam@gmail.com",
        password:'password'
    });
    user.save();
    res.json({
        "msg":"User created Successfully"
    })
})



app.listen(3000)