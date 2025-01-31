// Task 1: Reverse a String
function reverseString() {
    const inputString = document.getElementById('stringInput').value;
    var reversedString = "";
    var i = inputString.length - 1;

    while (i >= 0) {
        reversedString += inputString[i];
        i--;
    }

    document.getElementById('reverseOutput').innerText = 'Reversed String: ' + reversedString;
}


        // Task 2: Find Even & Odd Numbers and Compare Sums
        function findEvenOdd() {
    var input = document.getElementById('arrayInput').value;
    var arr = input.split(',').map(num => parseInt(num.trim()));

    if (arr.some(isNaN)) {
        document.getElementById('evenOddOutput').innerText = "Please enter valid numbers.";
        return;
    }

    // Using a while loop to find even and odd numbers
    var evenNumbers = [];
    var oddNumbers = [];
    var i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        } else {
            oddNumbers.push(arr[i]);
        }
        i++;
    }

    // Using do-while loop to calculate the sums of even and odd numbers
    var evenSum = 0;
    var oddSum = 0;
    var j = 0;
    do {
        if (arr[j] % 2 === 0) {
            evenSum += arr[j];
        } else {
            oddSum += arr[j];
        }
        j++;
    } while (j < arr.length);

    var comparisonResult = (oddSum > evenSum) ?
        `The odd sum (${oddSum}) is greater than the even sum (${evenSum}).` :
        `The even sum (${evenSum}) is greater than the odd sum (${oddSum}).`;

    // Displaying the results
    document.getElementById('evenOddOutput').innerHTML = `
        Even Numbers: ${evenNumbers.join(', ')}<br>
        Odd Numbers: ${oddNumbers.join(', ')}<br>
        ${comparisonResult}
    `;
}