var ranNo1 = Math.floor(Math.random()*6)+1; // random number between 1~6
var ranDiceImg1 = "images/dice" + ranNo1 + ".png"; // image source
var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", ranDiceImg1);

var ranNo2 = Math.floor(Math.random()*6)+1;
var ranDiceImg2 = "images/dice" + ranNo2 + ".png";
var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", ranDiceImg2);

// Play!
if (ranNo1 > ranNo2) {
  document.querySelector("h1").innerHTML = "👉Player 1 wins";
}
else if (ranNo1 < ranNo2) {
  document.querySelector("h1").innerHTML = "Player 2 wins👈";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
