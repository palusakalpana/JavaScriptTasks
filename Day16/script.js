function displayOutput(title, result) {
    let outputDiv = document.getElementById("output");
    let section = document.createElement("div");
    section.innerHTML = `<h3>${title}</h3><pre>${JSON.stringify(result, null, 2)}</pre>`;
    outputDiv.appendChild(section);
}

function concatArrays() {
    let sports = document.getElementById("sports").value.split(",").map(item => item.trim());
    let hobbies = document.getElementById("hobbies").value.split(",").map(item => item.trim());
    let mergedArray = sports.concat(hobbies);
    displayOutput("Merged Array (Sports + Hobbies)", mergedArray);
}

function getArrayInput() {
    return document.getElementById("numberArray").value.split(",").map(item => Number(item.trim()));
}

function addNumbers() {
    let newNumbers = prompt("Enter numbers to add (comma-separated):").split(",").map(Number);
    let array = getArrayInput().concat(newNumbers);
    displayOutput("Array after Adding Numbers", array);
}

function spliceNumbers() {
    let array = getArrayInput();
    let start = parseInt(prompt("Enter the start index for splice:"));
    let deleteCount = parseInt(prompt("Enter the number of elements to delete:"));
    let newValues = prompt("Enter new values to insert (comma-separated):").split(",").map(Number);
    array.splice(start, deleteCount, ...newValues);
    displayOutput("Array after Splice", array);
}

function sliceNumbers() {
    let array = getArrayInput();
    let start = parseInt(prompt("Enter the start index for slice:"));
    let end = parseInt(prompt("Enter the end index for slice:"));
    let slicedArray = array.slice(start, end);
    displayOutput("Sliced Array", slicedArray);
}

function joinNumbers() {
    let joinedString = getArrayInput().join(" ");
    displayOutput("Joined String", joinedString);
}

function sortNumbers() {
    let array = getArrayInput().sort((a, b) => a - b);
    displayOutput("Sorted Array", array);
}