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

document.getElementById("paragraph1").innerText = `${paintings.join("\n")}`;

// Get the average of the numbers in the studentGrades array and print it to screen
studentGrades = [88, 94, 92, 84, 87, 99, 100, 78];

const averageGrade = (grades) => {
    let gradeSum = 0;
    grades.forEach(grade => {
        gradeSum += grade;
    })
    return gradeSum / grades.length;
}
document.getElementById("paragraph2").innerText = `${studentGrades.join(", ")}
The average grade among those listed is ${averageGrade(studentGrades)}`; 

// Implicit Return
// -- If you forget to write "return", a value of undefined will be returned
const products = ["Motorcycle Helmet", "Gel Pen Set", "Frozen Yogurt", "Jumbo Bag o' Gummy Clusters", "Computer Monitor", "Panda Express Family Box"];
const itemsBeforeTax = [150.00, 5.00, 6.00, 4.25, 833.75, 42.50];

// NOTE: Remember, you can only assign a constant variable once!
const itemsAfterTax = itemsBeforeTax.map(item => item + item * .1);

document.getElementById("paragraph3").innerText = `Motorcycle Helmet: $${itemsBeforeTax[0]} becomes $${itemsAfterTax[0]}
Gel Pen Set: $${itemsBeforeTax[1]} becomes $${itemsAfterTax[1]}
Frozen Yogurt: $${itemsBeforeTax[2]} becomes $${itemsAfterTax[2]}
Jumbo Bag of Gummy Clusters: $${itemsBeforeTax[3]} becomes $${itemsAfterTax[3]}`;


/* -------- Exercise Ideas --------
- Cumulative/Running Average Algorithm 
- 
*/

/*
Array Functions:
- filter: will ALWAYS return an array
- find: will return the first match or undefined
- map: take elements of one array and change them
- includes: returns true or false
- join: specify "glue" for printing to the DOM
*/