// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.push(element);
    console.log("After push:", arr);//Original Array: [ 1, 2, 3 ] After push: [ 1, 2, 3, 4 ]
  }
  pushExample([1, 2, 3], 4);
  
  // pop()
  function popExample(arr) {
    console.log("Original Array:", arr);
  
    arr.pop();
    console.log("After pop:", arr); //Original Array: [ 1, 2, 3 ] After pop: [ 1, 2 ]
  }
  popExample([1, 2, 3]);
  
  // shift()
  function shiftExample(arr) {
    console.log("Original Array:", arr);
  
    arr.shift();
    console.log("After shift:", arr); //Original Array: [ 1, 2, 3 ] After shift: [ 2, 3 ] . it will remove the 0 th index and make the 1st index in 0th index.
  }
  shiftExample([1, 2, 3]);
  
  // unshift()
  function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.unshift(element);
    console.log("After unshift:", arr);//Original Array: [ 1, 2, 3 ]  After unshift: [ 5, 1, 2, 3 ] .
  }
  unshiftExample([1, 2, 3], 5);//it will add the element in the 0th index
  
  // concat()
  function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
  
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);//Original Arrays: [ 1, 2, 3 ] [ 4, 5, 6 ] After concat: [ 1, 2, 3, 4, 5, 6 ]
  }
  concatExample([1, 2, 3], [4, 5, 6]);
  
  // forEach()
  function forEachExample(arr) {
    console.log("Original Array:", arr);
  
    arr.forEach(function(item, index) {
      console.log(item, index);
    });
  }
  forEachExample([1, 2, 3]);//Original Array: [ 1, 2, 3 ]. it will iterate over the array and return element and its respective index
  // after foreach =    1 0
  //  after foreach =   2 1
  //  after foreach =   3 2
  
  // map()
  function mapExample(arr) {
    console.log("Original Array:", arr);
  
    // let newArr = arr.map(function(item) {
    //   return item * 2;
    // });
    let newArr = arr.map((item,index)=>item*2)
    console.log("After map:", newArr); //Original Array: [ 1, 2, 3 ]  After map: [ 2, 4, 6 ]
  }
  mapExample([1, 2, 3]);
  
  // filter()
  function filterExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.filter(function(item) {
      return item > 3;
    });
    console.log("After filter:", newArr); //Original Array: [ 1, 2, 3, 4, 5 ] After filter: [ 4, 5 ]
  }
  filterExample([1, 2, 3, 4, 5]);
  
  // find()
  function findExample(arr) {
    console.log("Original Array:", arr);
  
    let found = arr.find(function(item) {
      return item > 3;
    });
    console.log("After find:", found);
  }
  findExample([1, 2, 3, 4, 5]);//it will give the firrst item that is greater than the item .Original Array: [ 1, 2, 3, 4, 5 ] After find: 4
  
  // sort()
  function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr); //Original Array: [ 5, 2, 3, 4, 1 ] After sort: [ 1, 2, 3, 4, 5 ]
  }
  sortExample([5, 2, 3, 4, 1]);
//   A negative number (e.g., -1), a should come before b in the sorted array.
// Zero, the relative order of a and b remains unchanged.
// A positive number (e.g., 1), a should come after b in the sorted array.
// Step 1: The original array [5, 2, 3, 4, 1] is logged.
// Step 2: Sorting with sort() and a - b:
// Compares pairs of elements:
// 5 - 2 = 3 (5 is placed after 2)
// 2 - 3 = -1 (2 is placed before 3)
// 3 - 4 = -1 (3 is placed before 4)
// 4 - 1 = 3 (4 is placed after 1)
// Final sorted array: [1, 2, 3, 4, 5]
// Step 3: The sorted array [1, 2, 3, 4, 5] is logged.

  let fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
// Remove 2 elements starting from index 2
  fruits.splice(2, 2);
  console.log(fruits);
  //splice(2, 2):
//Index 2: The starting point is the element 'cherry'.
//2: The number of elements to remove is 2.
//if the second index was 1 then 1 element would have removed
//First index means starting point of index number
