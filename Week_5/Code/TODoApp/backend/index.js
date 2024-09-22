const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body; //it is like that bcz we have to give the input and here we'll be giving input from body that's why it is like this
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You Sent the wrong Inputs",
    });
    return;
  }
  //is everything ok then put it in mongoDb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "todo created successfully",
  });
});
app.get("/todo", async (req, res) => {
  const todos = await todo.find(); //if you want any specific then you just use object and spcify title or whatever you want
  res.json(todos);
});
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(211).json({
      msg: "Entered invalid Id",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as Completed",
  });
});

app.listen(3000);
