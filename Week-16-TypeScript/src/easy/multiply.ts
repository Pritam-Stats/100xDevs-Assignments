// Write a function that multiplies the results of two functions. Each function returns a number when called.
// Ensure the functions have proper type annotations.
// Example Input: f1 = () => 2, f2 = () => 3
// Example Output: 6

//define the shape and type of the function

type NumFunction = () => number;

export function multiplyResults(f1: NumFunction, f2: NumFunction): number {
  return f1() * f2();
}

// two fns for args

const func1: NumFunction = () => Math.floor(Math.random()*10);
const func2: NumFunction = () => Math.floor(Math.random()*100);

// const res = multiplyResults(func1, func2);
// console.log(res)