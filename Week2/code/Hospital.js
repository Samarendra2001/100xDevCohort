const express = require("express")
const app = express();
//this is the dummy database kind of thing we have created where we'll get all the data
const users = [{
    name:"JOhn",
    kidneys:[{
        healthy:false
    }]
}];
app.use(express.json());

//the first endpoint or api sholud return how many kidneys user have and out of them howmanys are healthy
app.get("/",((req,res)=>{
    const johnKidneys = users[0].kidneys;
    console.log(johnKidneys);//to check what it is giving
    const numberOfKidneys = johnKidneys.length;
    let healthyKidneys = 0;
    for(let i =0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            healthyKidneys+=1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys-healthyKidneys
    res.json({
        johnKidneys,
        numberOfKidneys,
        numberOfUnhealthyKidneys,
        healthyKidneys
    })
}))

//lets work on second endpoint and it should return a unhealthy or healthy kidney according to the user wants every time a user visit

app.post("/",((req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done"
    })

}))

//NOw PUT request for replacing every kidneys to  helthy kidneys
app.put("/",((req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
}))

//Now the last endpoint will be User can remove the unhealthy kidney 
app.delete("/",((req,res)=>{
    const newKidneys = [];
    for(let i =0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({
        msg:"Unhealthy kidneys removed Successfully"
    })
}))

app.listen(3000);