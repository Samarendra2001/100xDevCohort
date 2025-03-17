
// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
// function getLength(str) {
//     console.log("Original String:", str);
//     console.log("Length:", str.length);
//   }
//   getLength("Hello World"); //o/p= 11
  
  // indexOf
  // function findIndexOf(str, target) {
  //   console.log("Original String:", str);
  //   console.log("Index:", str.indexOf(target));
  // }
  // findIndexOf("Hello World", "World");//o/p = 6
  
//   // lastIndexOf
//   function findLastIndexOf(str, target) {
//     console.log("Original String:", str);
//     console.log("Index:", str.lastIndexOf(target));
//   }
//   findLastIndexOf("Hello World World", "world");//o/p = 12  it means the last occurence of this string world is wriiten two times , it will check the 1st index of second "World"
  
//   // slice
//   function getSlice(str, start, end) {
//     console.log("Original String:", str);
//     console.log("After slice:", str.slice(start, end));
//   }
//   getSlice("Hello World", 0, 5); //o/p = Hello. slice means start and end-1 here it will print Hello as 0 th index and 5-1 = 4th index
  
  // substring
  function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
  }
  getSubstring("Hello World", 0, 5);//it will give also start index and end-1 index .o/p = Hello
  
  // replace
  function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
  }
  replaceString("Hello World", "World", "JavaScript");//it willl replace javascript in place of world. O/p = Hello Javascript
  
  // split
  function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", "");//it will split string where space is there . o/p = ["Hello","World"]
  splitString("Hello World", "l")//After split: [ 'He', '', 'o Wor', 'd' ]
  // // trim
  // function trimString(str) {
  //   console.log("Original String:", str);
  //   console.log("After trim:", str.trim());
  // }
  // trimString(" Hello World ");//o/p = "Hello World" it remove the spaces from the beginning and end
  
  // // toUpperCase
  // function toUpper(str) {
  //   console.log("Original String:", str);
  //   console.log("After toUpperCase:", str.toUpperCase());
  // }
  // toUpper("Hello World");
  
  // // toLowerCase
  // function toLower(str) {
  //   console.log("Original String:", str);
  //   console.log("After toLowerCase:", str.toLowerCase());
  // }
  // toLower("Hello World");
  