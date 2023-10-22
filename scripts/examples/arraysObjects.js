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

// APPLYING ARRAY FUNCTIONS
// NOTICE: If join is not set to "", then it will default to "," 
// because that is the map default
const users = ["Jimmy M.", "Mickey M.", "Donald T.", "Bernie S."];
const usersHTML = `<ul>
${users.map(user => `<li>${user}</li>`).join("")}
</ul>`;

document.getElementById("arrayFuncParagraph").innerText = usersHTML;


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