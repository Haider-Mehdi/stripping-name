"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Store the person's name whitespace characters
const personNameWithWhitespace = "\n\t   Haider Mehdi   \t\n";
// Print the name with the whitespace around it
console.log("\n\tName with whitespace:");
console.log(personNameWithWhitespace);
// Strip the whitespace from the name
const strippedName = personNameWithWhitespace.trim();
// Print the name after stripping the whitespace
console.log("Name after stripping whitespace:");
console.log(strippedName);
