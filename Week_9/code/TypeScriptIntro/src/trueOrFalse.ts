function isLegal1(age:number):boolean{//if u does not give nay return type also typescript will know that it will return boolean.bcz it is a smart language.
    if (age>18) return true;
    else return false;
}

console.log(isLegal1(22));