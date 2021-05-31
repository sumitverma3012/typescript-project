"use strict";
// Dynamic type
var something;
something = 10;
something = 'some dummy string';
// Function
var greet;
greet = function (first, second) {
    console.log(first + second);
};
var add = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
var printSomething = function () { return console.log('Print'); };
var greetAgain = function (param) { return console.log(param); };
// Function signature
var greetAgainTwice;
greetAgainTwice = function (name, age) { return console.log(name + " - " + age); };
var logDetails;
logDetails = function (user) { return console.log(user.name + " - " + user.age); };
logDetails({ name: 'testing', age: 20 });
// DOM
var Invoice = /** @class */ (function () {
    // client: string;
    // details: string;
    // amount: number;
    // constructor(c: string, d: string, a: number) {
    //   this.amount = a;
    //   this.client = c;
    //   this.details = d;
    // }
    // another way of writing and assigning them, this works only if we use access modifiers
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoiceOne = new Invoice('Sam', 'works on the website', 200);
var invoiceTwo = new Invoice('John', 'works on the website', 280);
var invoices = [];
var button = document.querySelector('button'); // we are sure that element cannot be undefined ever
console.log(button.innerHTML);
var form = document.querySelector('.new-item-form');
console.log(form);
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(amount.valueAsNumber); // because JS by default converts values to string;
});
