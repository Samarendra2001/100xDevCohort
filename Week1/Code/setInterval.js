//setInterval - It is a Web API provided by the browser. It schedules a task to be put on the event queue after a given amount of time. 
// It takes function and it keeps on repeating the task after the given amount of time.


//this will print HIsam after each Interval of 2 sec

// setInterval(() => {
//     console.log("Hi sam");
// }, 2000);

//but how to close it . If you'll not close it then it will not be closed
//This will print 'Hello setInterval' every 2 seconds until and when cnt is greater than 5, it will stop the interval.
let count = 1;
const interval = setInterval(()=>{
    console.log("HI Sam");
    count++;
    if(count>5){
        clearInterval(interval)
    }
},2000);