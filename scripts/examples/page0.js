// Created on September 14th, 2023 in the evening
// Author: Caroline Wayne
// Following tutorials provided by learnjavascript.online

// Practicing arrow functions
// Rewriting array methods using the lambda
const paintColors = ["white", "black", "brown", "red", "yellow", "blue"];
const animals = ["bird", "bears", "squirrel", "fox", "duck", "seal"];

const paintings = [];

paintColors.forEach((color, index) => {
    console.log(animals[index]);
    console.log(`${color} ${animals[index]}`);
    paintings.push(`${color} ${animals[index]}`);
})

const paintParagraph = document.getElementById("paragraph1");
paintParagraph.innerText = `We have the following paintings: \n${paintings.join("\n")}`;