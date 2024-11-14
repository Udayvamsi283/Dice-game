var name1 = prompt("Player1 name");
var name2 = prompt("player2 name");
var goal = prompt("Enter the winning score");
document.querySelector("p.player1").innerHTML = name1;
document.querySelector("p.player2").innerHTML = name2;

var s1 = 0, s2 = 0, f1=0,f2=0,f3=0,f4=0;

const rollButton = document.getElementById("rollButton");

function rollTheDice() {
var person1 = Math.floor(Math.random() * 6) + 1;

var Imgsrc1 = "./images/dice" + person1 + ".png";

var Img1 = document.querySelectorAll("img")[0];

Img1.setAttribute("src", Imgsrc1);


var person2 = Math.floor(Math.random() * 6) + 1;

var Imgsrc2 = "./images/dice" + person2 + ".png";

var Img2 = document.querySelectorAll("img")[1];

Img2.setAttribute("src", Imgsrc2);

    s1 = s1 + person1;
    document.querySelector("p.player1").innerHTML = name1 + " = " + s1;
    
    s2 = s2 + person2;
    document.querySelector("p.player2").innerHTML = name2 + " = " + s2;
    
    if (s1 > s2) {    
    document.querySelector("h1").innerHTML = name1 + " Leading";
}
    else if (s2 > s1) {    
    document.querySelector("h1").innerHTML = name2 + " Leading";
}
else {
    document.querySelector("h1").innerHTML = "Equal score";
    }
    if (s1 >= goal/2 && f1 ===0) {
        alert(name1 + " Is Half way there");
        f1 = f1 + 1;
    }
    if (s2 >= goal/2 && f2 ===0) {
        alert(name2 + " Is Half way there");
        f2 = f2 + 1;
    }
    if (s1 >= goal && s2 >= goal) {
        document.querySelector("p.player1").innerHTML = name1;
        document.querySelector("p.player2").innerHTML = name2;
        document.querySelector("h1").innerHTML = "Game over";
        alert("The game is a DRAW");
        endGame();
    }
    else if (s1 >= goal && f3 === 0) {
        f3 = f3 + 1;
        document.querySelector("h1").innerHTML = "Game over";
        document.querySelector("p.player1").innerHTML = name1 + " Won ("+s1+")";
        document.querySelector("p.player2").innerHTML = name2+" Lost ("+s2+")";
        alert(name1 + " WON the Game 🎉");
        endGame();
        
    }
    else if (s2 >= goal && f4 === 0) {
        f4 = f4 + 1;
        document.querySelector("p.player2").innerHTML = name2 + " Won ("+s2+")";
        document.querySelector("p.player1").innerHTML = name1+" Lost ("+s1+")";
        document.querySelector("h1").innerHTML = "Game over";
        alert(name2 + " WON the Game 🎉");
        endGame();
    }
    
}
function endGame() {
    rollButton.style.display = "none";
}