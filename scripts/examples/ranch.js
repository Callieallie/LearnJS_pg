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
    specialties: ["Jumping", "Dressage"]
}

horse1.sponsor = "Best Buy";


const horse2 = {
    id: 2,
    name: "Juniper",
    riders: ["Chloe", "Royal"],
    age: 4,
    coatColor: "golden",
    stallNumber: 22,
    specialties: ["Dressage", "Polo"]
}

horse2.sponsor = "Walmart";

const horse3 = {
    id: 3,
    name: "Gertrude",
    riders: ["Samantha", "Eddie"],
    age: 2,
    coatColor: "grey",
    stallNumber: 13,
    specialties: ["Jumping"]
}

horse3.sponsor = "Kellogs";


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

const horseObjParagraph = document.getElementById("horsesListed");
horseObjParagraph.innerText = `Horse no. ${horse1.id.toString(10)}: ${horse1.name}
Riders: ${horse1.riders[0]}, ${horse1.riders[1]}
Age: ${horse1.age}
Coat Color: ${horse1.coatColor}
Stall No: ${horse1.stallNumber}
Specialties: ${horse1.specialties.join(", ")}
Sponsor: ${horse1.sponsor}

Horse no. ${horse2.id.toString(10)}: ${horse2.name}
Riders: ${horse2.riders[0]}, ${horse2.riders[1]}
Age: ${horse2.age}
Coat Color: ${horse2.coatColor}
Stall No: ${horse2.stallNumber}
Specialties: ${horse2.specialties.join(", ")}
Sponsor: ${horse2.sponsor}

Horse no. ${horse3.id.toString(10)}: ${horse3.name}
Riders: ${horse3.riders[0]}, ${horse3.riders[1]}
Age: ${horse3.age}
Coat Color: ${horse3.coatColor}
Stall No: ${horse3.stallNumber}
Specialties: ${horse3.specialties.join(", ")}
Sponsor: ${horse3.sponsor}`;

// -------- Default Parameters (Precurser to Arrow Functions)--------
function subtractOne(num = 0) {
    return num - 1;
}

const experimentParagraph = document.getElementById("defaultParams");
experimentParagraph.innerText = `subtractOne returns ${subtractOne(5)} when passed the number five as a parameter.
subtractOne returns ${subtractOne()} when passed nothing.`;

// -------- Arrow Functions (Lambdas, Callbacks, Anonymous Functions) --------
// shorter to write, uses lexical scope, and can benefit from implicit return
function doMyLaundry(noShirts = 0, noPants = 0) {
    return `I have washed and folded ${noShirts} shirts and ${noPants} pants. :)`;
}

// You can write a function by defining a variable and assigning it to an anonymous function
/*
const preparedBurger = function(ingredients = ["cheese", "ketchup"]) {
    return `Here is your burger with ${ingredients.join(", ")}. Enjoy!`;
}
*/
// Notice: the "function" keyword is removed 
// ... and "=>" is typed between the anonymous function's parameters and "{"
const preparedBurger = (ingredients = ["cheese", "ketchup"]) => {
    return `Here is your burger with ${ingredients.join(", ")}. Enjoy!`;
}

function doItThenLogIt(func) {
    func();
    console.log(func);
}

doItThenLogIt(preparedBurger);
doItThenLogIt(doMyLaundry);

const lambdaParagraph = document.getElementById("laundryBurgerExamples");
lambdaParagraph.innerText = `${doMyLaundry(5, 2)}
${preparedBurger(["cheese", "ketchup", "mustard", "tomato", "lettuce", "pickle"])}`;

// -------- EXERCISE IDEAS --------
/*
- Nail Salon: polish colors, nail shapes, prices
- Smoothie Bowl Cafe: ingredients, toppings, nutrition powders, spoons
- Horses: coat color, breed, age, name, owner, stall number, shoe size
- Foraging: mushrooms, flowers, trees, bark, soil, bugs
- Art Supplies: brushes, paints, watercolors, sketching pencils, canvases
- Bird Watching: type, food, nest, call, wingspan, habitat
*/