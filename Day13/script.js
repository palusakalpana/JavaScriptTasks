function changeImage(character) {
    let img = document.getElementById("img");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");

    if (character === "inder") {
        img.src = "https://static.abplive.com/wp-content/uploads/2020/10/06221931/harshvardhan.jpeg";
        btn1.innerText = "Harshvardhan Rane";
    } 
    else if (character === "saru") {
        img.src = "https://wp.missmalini.com/wp-content/uploads/2015/12/IMG_9939.jpg";
        btn2.innerText = "Mawra Hocane"; 
    } 
    else if (character === "Inspector Hari") {
        img.src = "https://alchetron.com/cdn/murali-sharma-73d93bc6-9c39-46a1-9e69-31c717e5aad-resize-750.jpeg";
        btn4.innerText = "Murali Sharma"; 
    } 
    else if (character === "abhimanyu") {
        img.src = "https://image.tmdb.org/t/p/w500/biTmNetqiYDNmnOGnxZ0b6uZPPY.jpg";
        btn3.innerText = "Abhimanyu Singh";  
    }
}

function updateFavoriteCharacter() {
    let nameInput = document.getElementById("nameInput").value.trim();
    let favCharacter = document.getElementById("favCharacter");

    if (nameInput !== "") {
        favCharacter.innerText = nameInput + " is my favourite character";
    } else {
        favCharacter.innerText = "My favourite character is Inder";
    }
}

document.getElementById("nameInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        updateFavoriteCharacter();
    }
});

let shapeIndex = 0;
function classchange() {
    let img = document.getElementById("shapeImage");
    shapeIndex++;

    if (shapeIndex % 4 === 1) {
        img.className = "shape1";  
    } else if (shapeIndex % 4 === 2) {
        img.className = "shape2";  
    } else if (shapeIndex % 4 === 3) {
        img.className = "shape3";  
    } else {
        img.className = "";  
    }
}

document.getElementById("themeToggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});