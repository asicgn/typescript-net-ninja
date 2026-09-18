//arrays
let names = ['luigi', 'mario','yoshi'];

names.push('toad'); // This line adds 'toad' to the end of the names array. 
// names.push(4); // we cannot push a number to the array because it is of type string[]. 
// names[0] = 3; // This will cause a type error because we are trying to assign a number to an index of a string array.

let mixed = ['ken', 4, 'chun-li', 8, 9]; 
mixed.push('ryu');
mixed.push(10);
mixed[0]=3;

//objects
let ninja = {
    name: 'mario', 
    belt: 'black',
    age: 30
};

ninja.name = 'ryu';
// ninja.age ='30'; // This will cause a type error because we are trying to assign a string to a property that is expected to be a number.
// ninja.skills =['fighting', 'sneaking']; //This will cause a type error because we are trying to add a new property to the object that was not defined in the original type.

ninja = {
    name: 'yoshi',
    belt: 'green',
    age: 40
    // skills: ['fighting', 'sneaking'] We've already defined the type of ninja object, so we cannot add new properties to it.
}