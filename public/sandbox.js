"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
//alias is can really help us out and reduce code duplication. It can also make our code more readable and easier to understand.
