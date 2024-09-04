/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
const findLargestElement =(arr)=>{
    let largest = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;
}

const Ans = findLargestElement([1,3,5,6,7,8,9,13]);
console.log(Ans);