"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let greet;
// greet = 'hello'; we cannot assign a string to a function type variable 
greet = () => {
    console.log('hello, again');
};
const add = (a, b, c) => {
    console.log(a + b);
};
/* const add = (a: number, b: number, c: number | string = 10) => { C's default value is 10, so if we don't pass it, it will be 10
    console.log(a + b);
}
*/
add(5, 10); // c is optional, so we can call the function without it
const minus = (a, b) => {
    return a - b;
};
let result = minus(3, 9); // result will be of type number because minus returns a number
