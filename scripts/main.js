// Created on August 13th, 2023 in the evening
// Author: Caroline Wayne
// Following tutorials provided by learnjavascript.online

// -------- Basic Functions --------
function sum(x, y) {
    // if you forget to return, it will return undefined
    // return also will quit/exit the function
    return x + y; 
}

// -------- Strings --------
// Using DOM - "Document Object Model" to target elements and manipulate them
const exampleParagraph = document.getElementById("experimentalP");
exampleParagraph.innerText = 'It`s rainy outside today.';

// -------- Characters --------
// Strings are arrays of characters
const charP1 = document.getElementById("charTest1");

const motto = "all hail Dr.Phil!";
const zeroMot = motto[0];
const twelveMot = motto[12];
const threeLessMot = motto[motto.length -3];
const atFiveMot = motto.charAt(5); // Returns the char value at specified index
const atTwoLessMot = motto.at(-2); // This will return the char second from the end

charP1.innerText = "The motto: " + motto + "\n" + "The char at index zero in the motto is " + zeroMot + ".\n" +
"The char at index twelve in the motto is " + twelveMot + ".\n" +
"The char at the index three less than the length of the motto is " + threeLessMot + ".\n" +
"The char at index five of the motto is " + atFiveMot + ".\n" +
"The char at index negative two of the motto is " + atTwoLessMot + ".\n";

// -------- Substrings --------
const rainString = exampleParagraph.innerText.substring(4,10);
const substringP1 = document.getElementById("subStrP");
substringP1.innerText = "The substring " + rainString.substring(0,5) + " is found in the word "  + rainString + ".\n";

// -------- Template String --------
const paintColor = "Pink";
const paintColor1 = "Blue";
const paintColor2 = "Yellow";
const paintColor3 = "Grey";
const paintTemplateString = `Scott's favorite paint color is ${paintColor}.
Callie's favorite paint color is ${paintColor1}.
Ted and Jame like the paint colors ${paintColor2} and ${paintColor3}. :)`;
const paintParagraph = document.getElementById("templateStringP");
paintParagraph.innerText = paintTemplateString;

// -------- Template Strings Representing HTML Code --------
function spendingLogTable(dollarNum, dateSpent) {
    return `<tr>
    <td>${dollarNum}</td>
    <td>${dateSpent}</td>
    </tr>`;
}

const spendingTableParagraph = document.getElementById("spendingFunction");
spendingTableParagraph.innerText = spendingLogTable(1200, 12);

// -------- Numbers --------
// 1000 can be written as 1_000. The underscore is called the numeric separator
// num -> string: A number can be converted to a string via the .toString() function
// string -> num: Use the Number.parseInt(string, radix) method
//                  - radix refers to the base of the numerical system (usually use 10)
// Converting is often useful when taking input from the user or the DOM
// Math Object: used to perform mathematical operations (floor, ceil, round, min, max, etc.)


// -------- Variables --------
// let vs const: Varriables assigned via let can be reassigned whereas those assigned via const cannot
// const does NOT create a constant
// var is another option, but it is discouraged (outdated)
//          - This has to do with JavaScript origionally not scoping


// -------- Conditions --------
// The single = sign is reserved for asignment
// The double = sign (==) is reserved for comparison not bound by datatype -- JS will convert
// The triple = sign (===) is reserved for strict comparison

const gradeExP = document.getElementById("gradeExample");

const grade = 3;
let passing = false;

if (grade >= 10) {
    passing = true;
    gradeExP.innerText = "Passing grade!";
    
} else if (grade === 10) {
    passing = true;
    gradeExP.innerText = "Passing on the limit.";
} else {
    passing = false;
    gradeExP.innerText = "Failing grade";
}

// -------- Returning Boolean Values --------
// Instead of using if statements, simply return a condition that evaluates to T or F
function isPassing (grade) {
    return grade >= 10;
}

// -------- Arrays --------
// JavaScript arrays are analogous to vectors in C++.
const flowers = ["peony", "daisy", "rose", "petunia", "sunflower", "violet", "chrysanthimum", "lilac"];
const plantColors = ["pink", "white", "red", "orange", "yellow", "purple", "blue", "perriwinkle"];

const flowerListP = document.getElementById("flowerList");
flowerListP.innerText = `The ${flowers[1]} is ${plantColors[1]}!
And the length of the flowers array is ${flowers.length}.\n`;

// The push method will return the new length of the array
// There is no append method for strings in JavaScript. Use the concat method instead.
// There is an append method for html nodes.
flowerListP.innerText += `The length of the flowers array is now ${flowers.push("poppy")}`;

// -------- Callbacks --------
// "A callback is a function definition passed as an argument to another function."
// Array Iteration using .foreach method.
// Alternative to .foreach is a for-of/for-each loop
const letterCount = [];
flowers.forEach(function(flower) {
    letterCount.push(flower.length);
});

// Adding to an existing string using concat method
let currentFlowerIndex = 0;
while (currentFlowerIndex < flowers.length) {
    flowerListP.innerText = flowerListP.innerText.concat("\n", flowers[currentFlowerIndex] +
    ": " + letterCount[currentFlowerIndex]);
    currentFlowerIndex = currentFlowerIndex + 1;
}

// -------- Array Methods --------
// .filter()
// The .filter() method will ALWAYS return an array
const numbers = [2, 94, 33, 7, 0, 51, 106];
const numbersUnderFifty = numbers.filter(function(number) {
    return number < 50;
});

const arrayMethodsP = document.getElementById("arrayMethods");
arrayMethodsP.innerText = "Numbers under fifty: " + numbersUnderFifty;

// .find()
// The .find() method will return the first item that matches the condition specified
// If no match is found, the .find() method will return as undefined
const pNamedFlower = flowers.find(function(flower) {
    return flower[0] === 'p';
});

arrayMethodsP.innerText += "\n" + pNamedFlower;

// -------- More Array Methods --------
// .map()
// This is a special application of the map function called zipping
const milesDrivenTrips = [306, 829, 252, 136, 724];
const hoursPerTrips = [4, 8, 3, 1.4, 0.89, 10];

const milesPerHour = milesDrivenTrips.map(function(milesDriven, index) {
    return milesDriven / hoursPerTrips[index];
});

// .includes()
// Returns true or false 
const petNames = [Leopold, Beatrice, Guy, Charlotte];
petNames.includes("Guy"); // true

// .join()
// The DOM converts arrays to strings and defaults to joining then with the comma
// The join function alllows you to specify a "glue" besides the comma
const trees = [spruce, maple, oak, birch, pine, willow];
trees.join("; "); // "spruce; maple; oak; birch; pine; willow"

// -------- Objects --------
// Comparable to a struct: one variable that groups several 
// In C++, an object is only ever an instance of a class
// In JavaScript, an object can stand alone
const boyfriend = {
    name: "Scott",
    age: 25,
    employer: "Goog",
    hairColor: "dirty blonde",
    eyeColor: "ocean blue",
    isHeAdorable: true,
    sexyRide: "Honda C300F",
    snores: true,
    isAHose: false
};



// -------- EXERCISE IDEAS --------
/*
- Nail Salon: polish colors, nail shapes, prices
- Smoothie Bowl Cafe: ingredients, toppings, nutrition powders, spoons
- Horses: coat color, breed, age, name, owner, stall number, shoe size
*/