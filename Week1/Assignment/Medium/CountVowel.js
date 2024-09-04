/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
    
  To Run file -> PS C:\Users\chand\Desktop\100xdevs_2.0\0-1\week1\assignments\mediun> npx jest ./tests/countVowels.test.js

  */

  const countVowels = (str)=>{
    let vowels = ['a','e','i','o','u'];
    let count =0;
    str.toLowerCase().split('').forEach((char)=>{
        if(vowels.includes(char)){
            count++;
        }
    });
    return count;
  }
  console.log(countVowels('Elephant'));