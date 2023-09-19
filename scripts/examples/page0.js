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

const boldPaintParagraph = document.getElementById("boldParagraph1");
boldPaintParagraph.innerText = 'We have the following paintings:';

const paintParagraph = document.getElementById("paragraph1");
paintParagraph.innerText = `${paintings.join("\n")}`;

// Get the average of the numbers in the studentGrades array and print it to screen
studentGrades = [88, 94, 92, 84, 87, 99, 100, 78];

const averageGrade = (grades) => {
    let gradeSum = 0;
    grades.forEach(grade => {
        gradeSum += grade;
    })
    return gradeSum / grades.length;
}

const boldGradesParagraph = document.getElementById("boldParagraph2");
boldGradesParagraph.innerText = `Here are some grades:`;

const gradesParagraph = document.getElementById("paragraph2");
gradesParagraph.innerText = `${studentGrades.join(", ")}
The average grade among those listed is ${averageGrade(studentGrades)}`; 