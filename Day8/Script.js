function calculateSquare() {
    let num = document.getElementById("squareInput").value;
    document.getElementById("squareResult").textContent = num * num;
}

function calculateAverage() {
    let values = document.getElementById("averageInput").value.split(',').map(Number);
    let sum = values.reduce((acc, num) => acc + num, 0);
    document.getElementById("averageResult").textContent = values.length ? sum / values.length : 0;
}

function checkVowels() {
    let str = document.getElementById("vowelInput").value;
    let vowels = "aeiouAEIOU";
    let foundVowels = [];
    
    for (let char of str) {
        if (vowels.includes(char)) {
            foundVowels.push(char);
        }
    }
    
    if (foundVowels.length > 0) {
        document.getElementById("vowelResult").textContent = `The string has ${foundVowels.length} vowels: ${foundVowels.join(', ')}`;
    } else {
        document.getElementById("vowelResult").textContent = "The string does not contain vowels.";
    }
}

function convertTemperature() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let scale = document.getElementById("scale").value;
    let result;
    
    if (scale === "C") {
        result = (temp - 32) * 5 / 9;
    } else {
        result = (temp * 9 / 5) + 32;
    }
    
    document.getElementById("tempResult").textContent = result;
}

function checkPrime() {
    const num = parseInt(document.getElementById('numberInput').value);
    const result = document.getElementById('result');
    
    // Function to check if a number is prime
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    // Display if the number is prime or not
    if (isPrime) {
        result.textContent = `${num} is a prime number.`;
    } else {
        result.textContent = `${num} is not a prime number.`;
    }

    // Call to find and display the nearest primes
    findNearestPrimes(num);
}

// Function to find the nearest primes to the left and right
function findNearestPrimes(num) {
    let leftPrime = num - 1;
    let rightPrime = num + 1;

    // Find nearest prime to the left
    while (!isPrimeNumber(leftPrime) && leftPrime > 1) {
        leftPrime--;
    }

    // Find nearest prime to the right
    while (!isPrimeNumber(rightPrime)) {
        rightPrime++;
    }

    // Calculate distances to compare
    const leftDiff = num - leftPrime;
    const rightDiff = rightPrime - num;

    // Clear the existing result text before appending the nearest prime
    let finalMessage = result.textContent;

    if (leftDiff < rightDiff) {
        finalMessage += ` Nearest prime is to the left: ${leftPrime}`;
    } else if (rightDiff < leftDiff) {
        finalMessage += ` Nearest prime is to the right: ${rightPrime}`;
    } else {
        finalMessage += ` Both primes are equally near: Left Prime: ${leftPrime}, Right Prime: ${rightPrime}`;
    }

    // Update the result with the final message
    result.textContent = finalMessage;
}

// Function to check if a number is prime
function isPrimeNumber(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}