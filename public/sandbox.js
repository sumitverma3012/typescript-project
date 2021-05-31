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
