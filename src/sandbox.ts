// Dynamic type
let something: any;
something = 10;
something = 'some dummy string';


// Function
let greet: Function;

greet = (first: number, second: number) => {
  console.log(first + second);
}

const add = (a: number, b: number = 10) => a + b;

const printSomething = (): void => console.log('Print');

// Type aliases
type StringOrNumber = string | number;

const greetAgain = (param: StringOrNumber) => console.log(param);