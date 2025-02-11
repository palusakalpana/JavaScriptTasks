 // Password Strength Checker
 document.getElementById("passwordStrengthForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var inp = document.getElementById("password").value;
    var maindiv = document.querySelector(".password"); 

    if (inp.length <= 5) {
        maindiv.innerText = "Too Weak";
        maindiv.style.color = "red";
    } 
    else if (inp.length === 8) { 
        maindiv.innerText = "Password is Valid";
        maindiv.style.color = "green";
    } 
    else {
        maindiv.innerText = "The password consists of eight characters.";
        maindiv.style.color = "orange";
    }
});

// Password Matcher
document.getElementById("passwordMatcherForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents form submission (page reload)

    var newPassword = document.getElementById("newpassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var messageDiv = document.querySelector(".match"); 

    if (newPassword === confirmPassword) {
        messageDiv.innerText = "Password changed successfully!";
        messageDiv.style.color = "green";
    } else {
        messageDiv.innerText = "Passwords don't match!";
        messageDiv.style.color = "red";
    }
});

document.getElementById("calcForm").addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON" && e.target.dataset.operation) {
        var num1 = parseFloat(document.getElementById("input1").value);
        var num2 = parseFloat(document.getElementById("input2").value);
        var operation = e.target.dataset.operation;
        var result;
        if (isNaN(num1) || isNaN(num2)) {
            result = "Invalid";
        } else {
            result = operation === "+" ? num1 + num2 :
                     operation === "-" ? num1 - num2 :
                     operation === "*" ? num1 * num2 :
                     num2 !== 0 ? (num1 / num2).toFixed(2) : "Error";
        }
        document.getElementById("output").innerText = result;
    }
});