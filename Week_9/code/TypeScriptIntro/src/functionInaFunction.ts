//create a function that takes another function as input and runs it after 1 second
function runAfter1s(fn: ()=>void){//it does not return so it is void if it returns integer then return type must be int
    setTimeout(fn,1000);
}

runAfter1s(function(){
    console.log("Hi there")
})