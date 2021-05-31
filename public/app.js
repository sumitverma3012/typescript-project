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
