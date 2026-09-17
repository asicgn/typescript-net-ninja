"use strict";
let character = 'mario';
let age = 30;
let isBlackBelt = false;
character = 'luigi';
// character = 30; // This will cause a TypeScript error because 'character' is of type string, and you are trying to assign a number to it.
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(5)); // This will work correctly
// console.log(circ('hello')); // This will cause a TypeScript error because 'circ' expects a number, but you are passing a string.
