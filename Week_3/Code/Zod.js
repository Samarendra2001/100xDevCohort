const express = require("express")
const app = express();
const zod = require("zod")

const schema = zod.array(zod.number());

app.use(express.json());


app.post("/health-check-up",((req,res)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    res.send({
        response
    })
}))
app.listen(3000);