const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://samrendrak882:Barick2001@cluster0.8makw.mongodb.net/")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todo',todoSchema);
module.exports = {todo}