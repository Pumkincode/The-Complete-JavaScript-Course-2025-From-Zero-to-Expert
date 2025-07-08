'use strict';
/*
//strict mode is a way to opt
//  in to a restricted variant of JavaScript. 
// It helps catch common coding mistakes and "unsafe"
//  actions such as defining global variables.

let hasDriversLicense = false; // A variable to hold the driver's license status
const passTest = true; // A constant to indicate if the test is passed
if (passTest) hasDriversLicense = true; // If the test is passed, set the driver's license status to true
if (hasDriversLicense) console.log('I can drive!'); // Log a message if the driver has a license


// Functions


function logger() {
  console.log('My name is Jonas'); 
}

// calling / running / invoking the function
logger(); // Call the logger function to print the message  
logger(); // Call the logger function again to print the message again
logger(); // Call the logger function a third time to print the message again   

// Function declaration
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`; 
  // Create a juice string using template literals(make your strings more readable 
  //especially when dealing with dynamic values or multi-line text. Just remember: use backticks (`), not quotes.)
  return juice; // Return the juice string
}

const appleJuice = fruitProcessor(5, 0); // Call the fruitProcessor function with 5 apples and 0 oranges
console.log(appleJuice); // Log the result of the apple juice

const appleOrangeJuice = fruitProcessor(2, 4); // Call the fruitProcessor function with 2 apples and 4 oranges
console.log(appleOrangeJuice); // Call the fruitProcessor function with 2 apples and 4 oranges and log the result
const num = Number('23'); // Convert the string '23' to a number using the Number function
// Function declaration vs. expression


// Function declaration 
const age1 = calcAge1(1991); // Call the calcAge1 function with the birth year 1991

function calcAge1(birthYear) { // Function declaration
  const age = 2037 - birthYear; // Calculate the age based on the birth year
  return age; // Return the calculated age
}

// Function expression


const calcAge2 = function (birthYear) { // Function expression  
  return 2037 - birthYear; // Return the calculated age
}

 const age2 = calcAge2(1991);// Call the calcAge2 function with the birth year 1991 //cannot access 'calcAge2' before initialization
console.log(age1, age2); // Log both calculated ages to the console

// Arrow functions

// Arrow function : shorter and faster to write than function expressions

const calcAge2 = function (birthYear) { 
  return 2037 - birthYear; }

  // Arrow function
   const calcAge3 = birthYear => 2037 - birthYear; // This is an arrow function that takes a birth year and returns the age
const age3 = calcAge3(1991); // Call the calcAge3 function with the birth year 1991
console.log(age3); // Log the calculated age to the console

// Arrow function with multiple parameters
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear; // Calculate the age based on the birth year
  const retirement = 65 - age; // Calculate the years until retirement
  return `${firstName} retires in ${retirement} years`; // Return a string with the retirement information
}

console.log(yearsUntilRetirement(1991, 'Jonas')); // Call the yearsUntilRetirement function with the birth year 1991 and first name 'Jonas' and log the result
console.log(yearsUntilRetirement(1980, 'Bob')); // Call the yearsUntilRetirement function with the birth year 1980 and first name 'Bob' and log the result

// Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4; // This function takes a fruit quantity and returns the quantity multiplied by 4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples); // Call cutFruitPieces with apples to get the number of apple pieces
  const orangePieces = cutFruitPieces(oranges); // Call cutFruitPieces with oranges to get the number of orange pieces
  const juice = `Juice with ${applePieces} piece apples and ${orangePieces} pieces of oranges`; 
  return juice;
}

console.log(fruitProcessor(2, 3)); // Call the fruitProcessor function with 2 apples and 3 oranges

// Reviewing functions


const calcAge = function (birthYear) {
  return 2037 - birthYear; 
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear); 
  const retirement = 65 - age; 
  if (retirement > 0) {
    console.log( `${firstName} retires in ${retirement} years`); 
  } else  {
    console.log(`${firstName} has already retired!`)
    ;
       return -1; 
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas')); 
console.log(yearsUntilRetirement(1950, 'Mike')); 


const calcAverage = (a, b, c) => {
  return (a + b + c) / 3; 
}
const scoreDolphins = calcAverage(44, 23, 71); 
const scoreKoalas = calcAverage(65, 54, 88); 
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// Introduction to Arrays/Data Structures

const friend1 = 'Michael'; // Declare a variable for the first friend
const friend2 = 'Steven'; // Declare a variable for the second friend   
const friend3 = 'Peter'; // Declare a variable for the third friend
const friends = ['Michael', 'Steven', 'Peter']; // Create an array of friends
console.log(friends); // Log the friends array to the console

console.log(friends[0]); // Access the first element of the friends array and log it to the console
console.log(friends[2]); // Access the third element of the friends array and log it
console.log(friends.length); // Log the length of the friends array to the console
console.log(friends[friends.length - 1]); // Access the last element of the friends array using its length and log it to the console  
friends[2] = 'Jay'; // Change the third element of the friends array to 'Jay'
console.log(friends); // Log the updated friends array to the console

const firstName = 'Jonas'; // Declare a variable for the first name
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]; // Create an array with various elements including the first name, last name, age, profession, and friends
console.log(jonas); // Log the jonas array to the console
console.log(jonas.length); // Log the length of the jonas array to the console
// Exercise: Array Methods

const calcAge = function (birthYear) {
  return 2037 - birthYear; // Calculate the age based on the birth year
}


const years = [1991, 1984, 2008, 2020]; // Create another array of years
const age1 = calcAge(years[0]); // Calculate the age for the first year
const age2 = calcAge(years[1]); // Calculate the age for the second year
const age3 = calcAge(years[years.length - 1]); // Calculate the age for the last year
console.log(age1, age2, age3); // Log the ages array to the console

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]; // Create an array of ages by calculating the age for each year in the years array
console.log(ages); // Log the ages array to the console


// Basic Array Operations
const friends = ['Michael', 'Steven', 'Peter']; // Create an array of friends 
//Add elements 
const newLenght = friends.push('Jay'); // Add 'Jay' to the end of the friends array
console.log(friends); // Log the updated friends array to the consoles
console.log(newLenght); // Log the new length of the friends array to the console

friends.unshift('John'); // Add 'John' to the beginning of the friends array
console.log(friends); // Log the updated friends array to the console


// Remove elements
friends.pop(); 
console.log(friends); 


friends.shift(); 
console.log(friends); 

console.log(friends.indexOf('Steven')); // Find the index of 'Steven' in the friends array and log it to the console
console.log(friends.indexOf('Bob')); // Try to find the index of 'Bob' in the friends array and log it to the console (should return -1 since 'Bob' is not in the array)


console.log(friends.includes('Steven')); // Check if 'Steven' is in the friends array and log the result to the console (should return true)
console.log(friends.includes('Bob')); // Check if 'Bob' is in the friends array

if (friends.includes('Peter')) { // Check if 'Peter' is in the friends array
  console.log('You have a friend called Peter'); // If 'Peter' is found,
}
 

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // Calculate the tip based on the bill amount
}
const bills = [125, 555, 44]; // Create an array of bills
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; // Create an array of tips by calculating the tip for each bill
console.log(bills, tips); // Log the bills and tips arrays to the console

// Objects

const jonasArray = [ // Create an array representing Jonas
  'Jonas',  // First name
  'Schmedtmann', // Last name 
  2037 - 1991, // Age
  'teacher', // Profession
  ['Michael', 'Peter', 'Steven'] // Friends
];
const jonas = { // Create an object representing Jonas
  firstName: 'Jonas', // First name
  lastName: 'Schmedtmann', // Last name
  age: 2037 - 1991, // Age
  job: 'teacher', // Profession
  friends: ['Michael', 'Peter', 'Steven'] // Friends
};  

// Dot vs. Bracket Notation

const jonas = { 
  firstName: 'Jonas', 
  lastName: 'Schmedtmann', 
  birthYear: 1991, 
  job: 'teacher', 
  friends: ['Michael', 'Peter', 'Steven'], 
}

console.log(jonas); 
console.log(jonas.lastName); // Access the last name using dot notation
console.log(jonas['lastName']); // Access the last name using bracket notation

const nameKey = 'Name'; // Create a variable for the key 'Name'
console.log(jonas['first' + nameKey]); // Access the first name using bracket notation
console.log(jonas['last' + nameKey]); // Access the last name using bracket notation



const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'); // Prompt the user for information about Jonas
if (jonas[interestedIn]) { // Check if the property exists in the jonas object
  console.log(jonas[interestedIn]); // Log the requested information to the console   
}
else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends'); // Log an error message if the property does not exist

}

jonas.location = 'Portugal'; // Add a new property 'location' to the jonas object
jonas['twitter'] = '@jonasschmedtman'; // Add a new property
console.log(jonas); // Log the updated jonas object to the console

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`); // Log a message about Jonas's friends using template literals


// Object Methods

const jonas = { // Create an object representing Jonas
  firstName: 'Jonas', 
  lastName: 'Schmedtmann', 
  birthYear: 1991, 
  job: 'teacher', 
  friends: ['Michael', 'Peter', 'Steven'], 
  hasDriversLicense: true, 
  // Method to calculate age
  // calcAge: function (birthYear) {
  //   return 2037 - this.birthYear; // Calculate the age based on the birth year
  // }

   calcAge: function (birthYear) {
    console.log(this); // Log the current object to the console
    return 2037 - this.birthYear; 
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year-old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`; // Return a summary of Jonas's information
  }
};

console.log(jonas.calcAge()); 
// console.log(jonas['calcAge'](1991)); 


console.log(jonas.getSummary()); // Call the getSummary method to log a summary of Jonas's information to the console

//alt + z = wrap text in VS Code



const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);


if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
  
 // Iteration: The for Loop

 console.log('Lifting weights repetition 1 🏋️‍♀️');
console.log('Lifting weights repetition 2 🏋️‍♀️');
console.log('Lifting weights repetition 3 🏋️‍♀️');
console.log('Lifting weights repetition 4 🏋️‍♀️');
console.log('Lifting weights repetition 5 🏋️‍♀️');
console.log('Lifting weights repetition 6 🏋️‍♀️');
console.log('Lifting weights repetition 7 🏋️‍♀️');
console.log('Lifting weights repetition 8 🏋️‍♀️');
console.log('Lifting weights repetition 9 🏋️‍♀️');
console.log('Lifting weights repetition 10 🏋️‍♀️');


// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) { 
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️ `
  ); 
}

 // Looping Arrays, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') 
    continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') 
    break;

  console.log(jonas[i], typeof jonas[i]);
}

// Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
// Looping backwards
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
} 
// Looping in loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Starting exercise ${exercise} ---`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

// while Loop
let rep = 1; // Initialize the repetition counter
while (rep <= 10) { // Continue the loop while rep is less than or equal
  10
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`); // Log the current repetition
    rep++; // Increment the repetition counter
  }
let dice = Math.trunc(Math.random() * 6) + 1; // Generate a random number between 1 and 6
console.log(dice); // Log the initial dice value
while (dice !== 6) { // Continue the loop until the dice value is 6
  console.log(`You rolled a ${dice}`); // Log the current dice value
  dice = Math.trunc(Math.random() * 6) + 1; // Generate a new random number between 1 and 6
  if (dice === 6) {
    console.log('Loop is about to end...'); // Log a message when the loop is about to end
  }
}

  */
 