// **1. Comparison Operators Example**
console.log("// 1. Comparison Operators")
console.log("==, ===, !=, !==, >, <, >=, <=");
// Declare variables
var a = prompt("Enter the first value (a):");
console.log("a is ",a)
var b = prompt("Enter the second value (b):");
console.log("b is ",b)

// Perform comparisons
console.log("==, ===, !=, !==, >, <, >=, <=");
console.log(`a == b: ${a == b}`); 
console.log(`a === b: ${a === b}`); 
console.log(`a != b: ${a != b}`); 
console.log(`a !== b: ${a !== b}`); 
console.log(`a > b: ${a > b}`);
console.log(`a < b: ${a < b}`); 
console.log(`a >= b: ${a >= b}`); 
console.log(`a <= b: ${a <= b}`); 

console.log("\n=== Ternary Operator Examples ===");
console.log("\n// 2. Even or Odd ")
var number = parseInt(prompt("Enter a number to check if it's even or odd:"));
console.log("Enter a number: ",number)
var evenOdd = (number % 2 === 0) ? "Even" : "Odd";
console.log(`The number ${number} is ${evenOdd}.`);

console.log("\n// 3. Adult or Minor Check")
var age = parseInt(prompt("Enter your age to check if you're an adult or a minor:"));
console.log("Age: ",age)
var adultOrMinor = (age >= 18) ? "Adult" : "Minor";
console.log(`You are an ${adultOrMinor}.`);

console.log("\n// 4. Grade Classification")
var score = parseInt(prompt("Enter your score (0-100) to classify your grade:"));
console.log("Score: ", score)
var grade = (score >= 90) ? "A" :
            (score >= 75) ? "B" :
            (score >= 60) ? "C" :
            (score >= 45) ? "D" : "F";
console.log(`Your grade is ${grade}.`);

console.log("\n// 5. Temperature Check")
var temperature = parseInt(prompt("Enter the temperature to categorize it:"));
console.log("temperature: ",temperature)
var tempCategory = (temperature > 30) ? "Hot" :
                   (temperature >= 20) ? "Warm" :
                   (temperature >= 10) ? "Cool" : "Cold";
console.log(`The temperature is categorized as ${tempCategory}.`);

console.log("\n// 6. Age Group Classification")
var personAge = parseInt(prompt("Enter your age to determine your age group:"));
console.log("PersonAge: ",personAge)
var ageGroup = (personAge <= 12) ? "Child" :
               (personAge <= 19) ? "Teen" :
               (personAge <= 64) ? "Adult" : "Senior";
console.log(`You belong to the ${ageGroup} age group.`);