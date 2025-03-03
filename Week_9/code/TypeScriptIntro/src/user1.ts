// interface User {
//     firstName : string;
//     lastName:string;
//     age:number,
//     address? : {//if I add ? to any field then it treated as optional like it can be included or not
//         city:string,
//         state:string
//     }
// }
interface Address{
    city:string,
    state:string,
    pincode?:number
}
interface User{
    firstName:string,
    lastName:string,
    age:number,
    address?:Address//so here we didn't have to repeat the address field in the user2 object
}
interface Office{
    officeName:string,
    address:Address
}
let user1:User={
    firstName:"sam",
    lastName:"barick",
    age:24
}
let user2:User={
    firstName:"sam",
    lastName:"barick",
    age:14,
    address:{
        city:"bbsr",
        state:"odisha"
    }
}
const isLegal2=(user:User):boolean=>{
    if(user.age>18){
        return true;
    }else return false;
}
console.log(isLegal2(user1));
console.log(isLegal2(user2));