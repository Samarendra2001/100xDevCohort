const jwt = require("jsonwebtoken")

//generate, decode and verify

const  value = {
    name:"sam",
    AcNo:12312312322
}

//Generate jwt using sign

const token = jwt.sign(value,"secret");
console.log(token);

//this token has been generated using the object value and Secret and remember this 
//token can be created further but it can't be verified as the original bcz the "Secret" which is used to crete this will not be captured by anyone.if this 
//get caught then the intruder(hacker) will get acces to your account.
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FtIiwiQWNObyI6MTIzMTIzMTIzMjIsImlhdCI6MTcyNDQyNjk5M30.uo52El6FKrOBnAP9BIUUvwSkqoKqyrGKJ5_Bx4V6nko
