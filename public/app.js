import { Invoice } from './classes/Invoice.js';
// Dynamic type
let something;
something = 10;
something = 'some dummy string';
// Function
let greet;
greet = (first, second) => {
    console.log(first + second);
};
const add = (a, b = 10) => a + b;
const printSomething = () => console.log('Print');
const greetAgain = (param) => console.log(param);
// Function signature
let greetAgainTwice;
greetAgainTwice = (name, age) => console.log(`${name} - ${age}`);
let logDetails;
logDetails = (user) => console.log(`${user.name} - ${user.age}`);
logDetails({ name: 'testing', age: 20 });
// DOM
const invoiceOne = new Invoice('Sam', 'works on the website', 200);
const invoiceTwo = new Invoice('John', 'works on the website', 280);
let invoices = [];
console.log(invoiceOne, invoiceTwo);
const button = document.querySelector('button'); // we are sure that element cannot be undefined ever
console.log(button.innerHTML);
const form = document.querySelector('.new-item-form');
console.log(form);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(amount.valueAsNumber); // because JS by default converts values to string;
});
const testPerson = {
    name: 'Sam',
    age: 20
};
console.log(testPerson);
