import {Invoice} from './classes/Invoice.js';
import {Payment} from './classes/Payment.js';
import {IPerson} from './interfaces/IPerson.js'
import {HasFormatter} from './interfaces/HasFormatter.js';
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

const button = document.querySelector('button')!; // we are sure that element cannot be undefined ever
console.log(button.innerHTML);

const form = document.querySelector('.new-item-form') as HTMLFontElement;
console.log(form);

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const unorderedList = document.querySelector('ul') as HTMLUListElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  let doc: HasFormatter; // object definitely have implemented format method
  
  // tuples
  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];
  if(type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  const list = new ListTemplate(unorderedList);
  list.render(doc, 'Test', 'end')
  console.log(doc); // because JS by default converts values to string;
})


// Generics
const generateUUID = <T>(input: T) => {
  const uuid = Math.floor(Math.random() * 100);
  return {...input, uuid};
}

console.log(generateUUID(10))
console.log(generateUUID('testing'))
console.log(generateUUID({name: 'test'}));

const generateUUIDSecond = <T extends {name: string}>(input: T) => {
  const uuid = Math.floor(Math.random() * 100);
  return {...input, uuid};
}

console.log(generateUUIDSecond({name: 'test'}));

