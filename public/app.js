import { Invoice } from './classes/Invoice.js'; // you have to wrtite the .js extension because of the web browser, it will not work with .ts extension
const inOne = new Invoice('mario', 'work on the mario website', 250);
const inTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
invoices.forEach(inv => {
    // inv.client = 'yoshi'; // This line will cause an error because 'client' is readonly
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
