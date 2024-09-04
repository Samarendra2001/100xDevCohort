function mathMethods(value) {
    console.log("Original Value:", value);
  
    let rounded = Math.round(value);
    console.log("After round():", rounded);
  
    let ceiling = Math.ceil(value);
    console.log("After ceil():", ceiling);
  
    let flooring = Math.floor(value);
    console.log("After floor():", flooring);
  
    let randomValue = Math.random();
    console.log("After random():", randomValue);
  
    let maxValue = Math.max(5, 10, 15);
    console.log("After max():", maxValue);
  
    let minValue = Math.min(5, 10, 15);
    console.log("After min():", minValue);
  
    let powerOfTwo = Math.pow(value, 2);
    console.log("After pow():", powerOfTwo);
  
    let squareRoot = Math.sqrt(value);
    console.log("After sqrt():", squareRoot);
  }
  
  // Example Usage for Math Methods
  mathMethods(4.56);
  mathMethods(9);
  mathMethods(25);


  //outputs
//   Original Value: 4.56
// After round(): 5
// After ceil(): 5
// After floor(): 4
// After random(): 0.5115791404693908
// After max(): 15
// After min(): 5
// After pow(): 20.793599999999998
// After sqrt(): 2.1354156504062622
// Original Value: 9
// After round(): 9
// After ceil(): 9
// After floor(): 9
// After random(): 0.06673615599788163
// After max(): 15
// After min(): 5
// After pow(): 81
// After sqrt(): 3
// Original Value: 25
// After round(): 25
// After ceil(): 25
// After floor(): 25
// After random(): 0.6036313815940895
// After max(): 15
// After min(): 5
// After pow(): 625
// After sqrt(): 5