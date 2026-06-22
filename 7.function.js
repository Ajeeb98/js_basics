// //** function expression 
// var greet1 = function(user="Guest", role="GUEST") {
//     const msg = `Hello ${user}, you are ${role}`;
//     // console.log(msg);
//     return msg;
// };

// console.log(greet1());

// let add = function(a, b) {
//     return sum = a + b;
//     return sum;
// };

// console.log(add(10, 12));



//* arrow function
// const add = (a, b) => {
//     return sum = a + b;
// };

// console.log(add(10, 12));


// const multiply = (a, b) => {
//     return  a * b;

// };

// console.log(multiply(7, 7));

// only one return statement

// const divide = (a, b) => a / b;

// console.log(divide(12, 2));

// const isEven = (num) => {
//     if(num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }}

// console.log(isEven(111));


// const isEven = num => num % 2 === 0;

// console.log(isEven(110));
// console.log(isEven(111));

// const isOdd = function(num) {
//     if (num % 2 !== 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
 
// // console.log(isOdd(112));
// // console.log(isOdd(111));



// // callback function

// const parent= function(a) {
//     console.log("Parent");
//     a();
// };

// const child = function() {
//     console.log("Child");
    
// };

// // parent(child);
// parent(child());


// higher order function
// const outer = () => {
//     console.log("Outer");
//     const inner = () => {
//         console.log("Inner");
//     };
//     return inner;
// };
// const x= outer();

// // IIFE - Immediately Invoked Function Expression
// // (function() {
// //     console.log("IIFE ");
// // }   )();

// const calculate = (a, b, operation) => {
//    const result = operation(a, b);
//    console.log("result is: ", result);
   
// };
// const sum = (a, b) => a + b;
// const difference = (a, b) => a - b;
// const mul = (a, b) => a * b;



// calculate(10, 2, sum);
// calculate(10, 2, difference);
// calculate(10, 2, mul);
// calculate(50,50,mul);
// calculate(50,3,(a, b) => a % b);

// // function factory
// // const factory = (a) => {
// //     return (b) => {
// //         return a + b;
// //     };
// // };
// const factory = a => b => a + b;

// const add5 = factory(5);
// const add50= factory(50);
// console.log(add5(10));
// console.log(add5(20));
// console.log(add50(10));

//  generator function

function* generatcount() { 
    let y = 1;
    while(true) {
        
        yield y++;
    }
    
    
}
const counter = generatcount();

console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());



