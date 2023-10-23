// Created on September 14th, 2023 in the evening
// Author: Caroline Wayne
// Following tutorials provided by learnjavascript.online

// Practicing arrow functions
// Rewriting array methods using the lambda
const paintColors = ["white", "black", "brown", "red", "yellow", "blue"];
const animals = ["bird", "bears", "squirrel", "fox", "duck", "seal"];

const paintings = [];

// Lambdas omit the name of the inner function and add the "=>"
// If the inner function has only one parameter, the parenthesis can be dropped
paintColors.forEach((color, index) => {
    console.log(animals[index]);
    console.log(`${color} ${animals[index]}`);
    paintings.push(`${color} ${animals[index]}`);
})

document.getElementById("paintingsParagraph").innerText = `${paintings.join("\n")}`;

// Get the average of the numbers in the studentGrades array and print it to screen
studentGrades = [88, 94, 92, 84, 87, 99, 100, 78];

const averageGrade = (grades) => {
    let gradeSum = 0;
    grades.forEach(grade => {
        gradeSum += grade;
    })
    return gradeSum / grades.length;
}
document.getElementById("gradesParagraph").innerText = `${studentGrades.join(", ")}
The average grade among those listed is ${averageGrade(studentGrades)}`; 

// Implicit Return
// -- If you forget to write "return", a value of undefined will be returned
const products = ["Motorcycle Helmet", "Gel Pen Set", "Frozen Yogurt", "Jumbo Bag o' Gummy Clusters", "Computer Monitor", "Panda Express Family Box"];
const itemsBeforeTax = [150.00, 5.00, 6.00, 4.25, 833.75, 42.50];

// NOTE: Remember, you can only assign a constant variable once!
// The following implicit return works without a stated return and 
// does not return undefined because it meets these requirements:
// 1. Is an arrow function
// 2. The entire function is only ONE STATEMENT; there are no curly braces
// 3. There is no return keyword
const itemsAfterTax = itemsBeforeTax.map(item => item + item * .1);

document.getElementById("taxParagraph").innerText = `Motorcycle Helmet: $${itemsBeforeTax[0]} becomes $${itemsAfterTax[0]}
Gel Pen Set: $${itemsBeforeTax[1]} becomes $${itemsAfterTax[1]}
Frozen Yogurt: $${itemsBeforeTax[2]} becomes $${itemsAfterTax[2]}
Jumbo Bag of Gummy Clusters: $${itemsBeforeTax[3]} becomes $${itemsAfterTax[3]}`;

/*
function double(value) {
    return value * 2;
}
*/
// The above can be rewritten as
const double = value => value * 2;

// Implicit return functions can also take multiple parameters
const addValues = (value1, value2) => value1 + value2;

// Practicing the array map function with implicit return
const squaringNumbers = [2, 5, 9, 12, 4, 16, 1, 3];
const numbersSquared = squaringNumbers.map(squaringNumber => squaringNumber * squaringNumber);

document.getElementById("doubleParagraph").innerText = `If the number 2 is doubled, it becomes ${double(2)}.
The numbers 6 and 14 make ${addValues(6, 14)} when added together.
The numbers ${squaringNumbers.join(", ")} become ${numbersSquared.join(", ")} when squared.`;

// STRINGS - CHAPTER 11
// string.trim() will remove all leading or trailing white space characters
// string.startsWith("") returns T/F based on it's substring input
// string.endsWith("") returns T/F the same way as string.startsWith("")
// string.includes("") returns T/F for the substring ANYWHERE in the string
// --------
// string.split("separator") will split a string into an array of strings by separator
// - - - exampleString = "Bread,Tomatoes,Milk,Eggs";
// - - - const exampleArray = exampleString.split(",");
// - - - console.log(exampleArray); // ["Bread", "Tomatoes", "Milk", "Eggs"]
// The opposite of string.split("") is string.join("")
// --------
// string.replace(search, replace) will take the first instance of what is searched for and replace it
// - - - const standardDate = "10/16/2023";
// - - - standardDate.replace("/", "-");
// - - - console.log(standardDate); //10-16/2023
// If the goal is to replace ALL instances, use string.replaceAll(search, replace) instead
// --------

// APPLYING ARRAY FUNCTIONS - CHAPTER 12
// NOTICE: If join is not set to "", then it will default to "," 
// because that is the map default
// -- The forEach array function would not work because it returns "undefined"
const users = ["Jimmy M.", "Mickey M.", "Donald T.", "Bernie S."];
const usersHTML = `<ul>
${users.map(user => `<li>${user}</li>`).join("")}
</ul>`;

document.getElementById("arrayFuncParagraph").innerText = usersHTML;

// Array.every(callback)
// Will return T/F based on a condition's being met by EVERY item
// Array.some(callback)
// Will return T if at least one item in the array meets a condition and F if none do
const someNumbers = [10, 82, 304, 26];
const someOtherNumbers = [33, 1, 57, 13];

const allEven = someNumbers.every(number => number % 2 === 0);
const allOdd = someNumbers.every(number => number % 2 !== 0);
const allEvenOther = someOtherNumbers.every(number => number % 2 === 0);
const allOddOther = someOtherNumbers.every(number => number % 2 !== 0);

document.getElementById("arrayEveryParagraph").innerText = `The array ${someNumbers.join(", ")} will return ${allEven} when every element is checked for being even and ${allOdd} when every element is checked for being odd.
The array ${someOtherNumbers.join(", ")} will return ${allEvenOther} when every element is checked for being even and ${allOddOther} when every element is checked for being odd.`;

// Array.splice(start[, deleteCount])
// Not to be confused with another method "slice".
// The weird syntax "[, deleteCount]" indicates that the deleteCount parameter is optional.
// The splice method deletes items from the array beginning with the specified start index
// ... and continues deleting for EITHER as many indicies are specified by the deleteCount
// ... parameter OR until the end of the array.
const initialFallThings = ["leaves", "pumpkins", "apples", "cider", "corn mazes", "ghosts"];
const fallThings = ["leaves", "pumpkins", "apples", "cider", "corn mazes", "ghosts"];
const splicedFallThings = fallThings.splice(2,2);

document.getElementById("spliceDemoParagraphA").querySelector("span").style.fontWeight = "bold";
document.getElementById("spliceDemoParagraphA").querySelector("span").innerText = initialFallThings.join(", ");

document.getElementById("spliceDemoParagraphB").querySelector("span").style.fontWeight = "bold";
document.getElementById("spliceDemoParagraphB").querySelector("span").innerText = fallThings.join(", ");

document.getElementById("spliceDemoParagraphC").querySelector("span").style.fontWeight = "bold";
document.getElementById("spliceDemoParagraphC").querySelector("span").innerText = splicedFallThings.join(", ");

/*
document.getElementById("spliceDemoParagraph").innerText = `The fallThings array has the following items before it is spliced: ${initialFallThings.join(", ")}
After splicing from indicies 2 to 4, the fallThings array contains the following: ${fallThings.join(", ")}
These items were deleted from the array: ${splicedFallThings}`;
*/


/* -------- Exercise Ideas --------
- Cumulative/Running Average Algorithm 
- 
*/

/* --- Notes to add to Website ---
- Lambda functions and implicit return
- A short reference of commonly used functions
*/

/*
Array Functions:
- filter: will ALWAYS return an array
- find: will return the first match or undefined
- map: take elements of one array and change them
- includes: returns true or false
- join: specify "glue" for printing to the DOM

String Functions:
- trim: remove leading/trailing whitespace chars
- startsWith, endsWith, includes: returns T/F based on substring
- split: opposite of the array join function; string -> array
- replace(search, replace): swaps first instance with specified substr
*/