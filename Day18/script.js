function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('digitalClock').innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

function calculateAge() {
    let birthDate = document.getElementById("birthDate").value;
    if (!birthDate) {
        document.getElementById("ageResult").innerText = "Please enter a valid date!";
        return;
    }
    let birth = new Date(birthDate);
    let today = new Date();
    let ageYears = today.getFullYear() - birth.getFullYear();
    let ageMonths = today.getMonth() - birth.getMonth();
    let ageDays = today.getDate() - birth.getDate();
    
    if (ageDays < 0) {
        ageMonths--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += lastMonth;
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    document.getElementById("ageResult").innerText = `Age: ${ageYears} years, ${ageMonths} months, ${ageDays} days`;
}