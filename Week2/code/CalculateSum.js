const express = require("express");
const app = express();
//calculate sum function

const CalculateSum = (n)=>{
    let ans = 0;
    for(let i =1;i<=n;i++){
        ans+=i;
    }
    return ans;
}
//writting apis for grtting the data
app.get("/",((req,res)=>{
    const n = req.query.n;//it is used for query parameter so that you can add value of n in url
    const ans = CalculateSum(n);
    res.send("HI your answer is "+ ans);
}))
app.listen(3000);