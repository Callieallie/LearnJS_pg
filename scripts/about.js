// Created on August 12th, 2023 in the evening
// Author: Caroline Wayne
// Following tutorials provided by learnjavascript.online (begining in chapter 8 - Objects)

// -------- Objects --------
const horse1 = {
    id: 1,
    name: "Galeleo",
    riders: ["Belle", "Kim"],
    age: 3,
    coatColor: "black",
    stallNumber: 38,
    jumping: true,
    dressage: true,
    polo: false
}

const horse2 = {
    id: 2,
    name: "Juniper",
    riders: ["Chloe", "Royal"],
    age: 4,
    coatColor: "golden",
    stallNumber: 22,
    jumping: false,
    dressage: true,
    polo: false
}

// -------------------------------------------------------------------
/*BAD FORM: An way to list keys on an object*/
/*Came up as an example when I had horse specialties listed as bool values all seperately.
I was trying to create a function which might take a bool value like "dressage: true",
assess the bool true or falesness, and return the variable name only if the bool were true.*/
/*When the code runs through a JS optimizer, the variable names are shortened and delerious*/

/*function listSpecialty(horse) {
    const specialtyNames = [];
    for(let attr of Object.keys(horse)) {
        if(typeof horse[attr] === "boolean"){
            if(horse[attr]) {
                specialtyNames.push(attr);
            }
        }
    }
    return specialtyNames;
}

console.log(listSpecialty(horse1)); // Lists all variables or "keys" within passed object
*/
// -------------------------------------------------------------------

const horseObjParagraph = document.getElementById("paragraph1");
horseObjParagraph.innerText = `Horse no. ${horse1.id.toString(10)}: ${horse1.name}
Riders: ${horse1.riders[0]}, ${horse1.riders[1]}
Age: ${horse1.age}
Coat Color: ${horse1.coatColor}
Stall No.: ${horse1.stallNumber}`;
//Specialties: ${}

// -------- EXERCISE IDEAS --------
/*
- Nail Salon: polish colors, nail shapes, prices
- Smoothie Bowl Cafe: ingredients, toppings, nutrition powders, spoons
- Horses: coat color, breed, age, name, owner, stall number, shoe size
- Foraging: mushrooms, flowers, trees, bark, soil, bugs
- Art Supplies: brushes, paints, watercolors, sketching pencils, canvases
- Bird Watching: type, food, nest, call, wingspan, habitat
*/