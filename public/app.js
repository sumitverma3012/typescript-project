import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
/** Dynamic type **/
// let something: any;
// something = 10;
// something = 'some dummy string';
/** Function **/
// let greet: Function;
// greet = (first: number, second: number) => {
//   console.log(first + second);
// }
// const add = (a: number, b: number = 10) => a + b;
// const printSomething = (): void => console.log('Print');
/**  Type aliases **/
// type StringOrNumber = string | number;
// const greetAgain = (param: StringOrNumber) => console.log(param);
/**  Function signature **/
// let greetAgainTwice: (first: string, second: number) => void;
// greetAgainTwice = (name: string, age: number) => console.log(`${name} - ${age}`);
// type Details = {name: string, age: number};
// let logDetails: (user: Details) => void;
// logDetails = (user: Details) => console.log(`${user.name} - ${user.age}`);
// logDetails({name: 'testing', age: 20})
/**  DOM  **/
// const invoiceOne = new Invoice('Sam', 'works on the website', 200);
// const invoiceTwo = new Invoice('John', 'works on the website', 280);
// let invoices: Invoice[] = [];
// console.log(invoiceOne, invoiceTwo)
const button = document.querySelector('button'); // we are sure that element cannot be undefined ever
console.log(button.innerHTML);
const form = document.querySelector('.new-item-form');
console.log(form);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const unorderedList = document.querySelector('ul');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let doc; // object definitely have implemented format method
    // tuples
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    const list = new ListTemplate(unorderedList);
    list.render(doc, 'Test', 'end');
    console.log(doc); // because JS by default converts values to string;
});
// Generics
const generateUUID = (input) => {
    const uuid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, input), { uuid });
};
console.log(generateUUID(10));
console.log(generateUUID('testing'));
console.log(generateUUID({ name: 'test' }));
const generateUUIDSecond = (input) => {
    const uuid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, input), { uuid });
};
console.log(generateUUIDSecond({ name: 'test' }));
