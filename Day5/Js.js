// Toggle output visibility and ensure it stays open once clicked
function toggleOutput(outputId) {
    const outputDiv = document.getElementById(outputId);
    if (outputDiv.style.display === 'none' || outputDiv.style.display === '') {
        outputDiv.style.display = 'block';
    }
}

// Task 1: Print Even Numbers from 1 to 20
const evenNumbers = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
document.getElementById('task1Output').innerHTML = evenNumbers.join(', ');

// Task 2: Print Multiples of 5 up to 50
const multiplesOfFive = [];
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        multiplesOfFive.push(i);
    }
}
document.getElementById('task2Output').innerHTML = multiplesOfFive.join(', ');

// Task 3: Calculate Factorial
function calculateFactorial() {
    const num = parseInt(document.getElementById('factorialInput').value);
    if (isNaN(num) || num < 0) {
        document.getElementById('factorialResult').innerText = 'Please enter a valid non-negative number.';
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById('factorialResult').innerText = `Factorial of ${num} is ${factorial}`;
}

// Task 4: Print the Alphabet
let alphabet = '';
for (let i = 65; i <= 90; i++) {
    alphabet += String.fromCharCode(i) + ' ';
}
document.getElementById('task4Output').innerHTML = alphabet.trim();

// Task 5: Multiplication Tables (1 to 5)
const table = document.getElementById('multiplicationTable');
for (let i = 1; i <= 5; i++) {
    let headerRow = `<tr><th colspan="2">Table of ${i}</th></tr>`;
    table.innerHTML += headerRow;
    for (let j = 1; j <= 10; j++) {
        let row = `<tr><td>${i} x ${j}</td><td>${i * j}</td></tr>`;
        table.innerHTML += row;
    }
}