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
const flowers = ["peony", "daisy", "rose", "petunia", "sunflower", "violet", "chrysanthimum", "lilac"];
const plantColors = ["pink", "white", "red", "orange", "yellow", "purple", "blue", "perriwinkle"];

const flowerListP = document.getElementById("flowerList");
flowerListP.innerText = `The ${flowers[1]} is ${plantColors[1]}!
And the length of the flowers array is ${flowers.length}.\n`;

// The push method will return the new length of the array
flowerListP.append(`The length of the flowers array is now ${flowers.push("poppy")}`);
