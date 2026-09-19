//explicit types
let character:string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi'; we define age as a number, so we cannot assign a string to it
age = 40;

// isLoggedIn =25; same as above, we cannot assign a number to a boolean variable
isLoggedIn = true;

//arrays
let ninjas: string[] = []; // we have to make sure that array is empty for push method to work
ninjas.push('shaun');

//union types
let mixed: (string | number | boolean)[] = [];
mixed.push(20);
mixed.push('hello');
mixed.push(true);
console.log(mixed);

let uid: string | number;
uid = '123';
uid = 123;

//objects
let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 30};

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
};

ninjaTwo = {name: 'mario', age: 20, beltColour: 'black'}; // it has to have all the properties defined in the object type and not any other properties