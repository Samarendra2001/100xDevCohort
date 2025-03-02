function sum(a:number , b:number): number {//third number is of return type
   return a + b;//even you don't give return type explicitly , typescript able to know that the return type will be a number
}
const value = sum(5,6);
console.log("sum is " + value);
 