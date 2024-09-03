//map and filter

//map
//given an array with input[1,2,3,4,,5],give me back a new array with
//in which every value is multiplied by 2
//o/p = [2,4,6,8,10]

//normal way

// const input = [1,2,3,4,5];
// const Output =[];
// for(let i=0;i<input.length;i++){
//     Output.push(input[i]*2);
// };
// console.log(Output);

//using map function
//first syntax

// const input = [1,2,3,4,5];
// const transform =(i)=>{
//     return i*2;
// }
// const ans = input.map(transform);
// console.log(ans)

//cleaner way
const givenArray = [2,3,4,5,6,7,8]
const output = givenArray.map((i)=>{
    return i*2;
})
console.log(output);

//another way if only one statement is there after return then no need to write return

const inpt = [1,2,3,3,4,5,6,7];
const ans = inpt.map(i=>i*2);
console.log(ans);


//filter
//given an input array give me back all the even values from it


const Arr = [1,2,3,4,56,7,8,0];
const Ans = Arr.filter((i)=>{
     return(i%2==0)
})
console.log(Ans)

//anotherway

const answer = Arr.filter(i=>i%2==0);
console.log(answer);

//map function implementation

const map = (arr,callback)=>{
    const result = [];
    for(let i =0;i<arr.length;i++){
        result.push(callback(arr[i],i,arr))
    }
    return result;
}
const arr = [1, 2, 3, 4];
const doubled = map(arr, (i) => i * 2);
console.log(doubled);
//filter function implementation

const filter =(arr1,callback1)=>{
    const reslut1 =[];
    for(let i =0;i<arr1.length;i++){
        if(callback1(arr1[i],i,arr1)){
            reslut1.push(arr1[i])
        }
        
    }
    return reslut1;
}
const arr1 = [1, 2, 3, 4];
const even = filter(arr1, (i) => i%2 == 0);
console.log(even);