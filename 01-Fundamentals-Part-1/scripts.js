/*
linking a JavaScript file
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);
Values and Variables
//standar variable name in JavaScript(camelCase notation)
let firstName = "Leno";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.145

let myFirstJob = "Programmer"

console.log(myFirstJob)

true;
let JavascriptIsFun = true;//boolean
console.log(JavascriptIsFun);

//console.log(typeof true);
console.log(typeof JavascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');
//dynamic typing
JavascriptIsFun = 'YES!';//string
console.log(typeof JavascriptIsFun);

data type

//undefined/empty value
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let, const and var
let age = 30;
age = 31;

// const birthYear = 1990;
// const job;

var job = 'Programmer';
job = 'Teacher'

lastName = 'Schmedtmann'
console.log(lastName)


// Basic operators
//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3 means 2 to the power of 3 = 2*2*2

const firstName = "Jonas";
const lastName = " Schmedtmann";
console.log(firstName + " " + lastName);
//console.log(typeof JavascriptIsFun); typeof the variable

//Assigment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4  = 100
x++; // x = x + 1;
x--;
x--;
console.log(x);

//Comparison operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
// console.log(ageJonas > ageSarah); // >,<, >=, <=
// console.log(ageSarah >= 18);
// const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
//Operator precedence
let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
//challenge
const massMark = 78;
const heightMark = 169;
const massJohn = 92;
const heightJohn = 188;

const BMIMark = (massMark / heightMark) * heightMark;
const BMIJohn = (massJohn / heightJohn) * heightJohn;

console.log(BMIMark);
console.log(BMIJohn);

//Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String     
multiple  
lines`);

// if / else Statements
const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2004;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark})  is higher than John's!
    (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's!(${BMIMark}) !`);
}

//Type Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//Type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + String(23) + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);
*/
//logical operators
const hasDriversLicense = true; // A