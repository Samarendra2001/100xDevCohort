// Generators are a new type of function in ES6 that allow you to pause and resume the execution of a function. 
// This is useful for asynchronous operations, such as reading from a file or fetching data from a server. Generators are defined using the function* syntax, 
//and yield is used to pause the execution of the function and return a value. The next method is used to resume the execution of the function.


function* printNums(){
    console.log('First');
    yield 1;  // yield pauses the execution of the function and returns a value
    console.log('Second');
    yield 2;
    console.log('Third');
    yield 3;
}
const gen = printNums();
console.log(gen.next().value); // gives value 1

console.log(gen.next()); // object { value: 2, done: false }

// When printNums() is called, it does not execute immediately. Instead, an iterator is returned.
// The first console.log('First') is executed when the generator function is resumed (using next()), 
//and then the function encounters the yield 1 statement.
// The yield keyword pauses the function's execution and returns the value 1 to the caller.
// At this point, the function is paused, and its state is saved.

// The next time the generator is resumed (again using next()), the function picks up right after the yield 1 statement. The console.log('Second') is executed, and then the function encounters yield 2.
// Similar to before, yield pauses the function and returns the value 2 to the caller.
// The next() method is used to resume the generator function from where it left off,
// and it returns an object with two properties: value (the yielded value) and done (a boolean indicating if the generator has completed).